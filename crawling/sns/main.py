import tweepy
import traceback
import time
import pymongo
from tweepy import OAuthHandler
from pymongo import MongoClient
from pymongo.cursor import CursorType

twitter_consumer_key = ""
twitter_consumer_secret = ""
twitter_access_token = ""
twitter_access_secret = ""

auth = OAuthHandler(twitter_consumer_key, twitter_consumer_secret)
auth.set_access_token(twitter_access_token, twitter_access_secret)
api = tweepy.API(auth)

def crawllTwit(snsname, findtag):
    account = snsname
    tweets = api.user_timeline(screen_name=account, count=100, include_rts=False, exclude_replies=True, tweet_mode='extended')

    snsList = []
    snsTime = []
    url = []
    pic = []

    i = 0
    for tweet in tweets:
        flag = tweet.full_text.find(findtag)
        if flag >= 0:
            ttp = tweet.full_text.split("https://")
            gong = ""
            count = 0
            for slist in ttp:
                if count == (len(ttp) - 1):
                    break
                gong = gong + slist
                count += 1
            snsList.append(gong)
            snsTime.append(tweet.created_at)
            tmp = f"https://twitter.com/{tweet.user.screen_name}/status/{tweet.id}"
            url.append(tmp)
            i += 1
            media = tweet.entities.get('media', [])
            if (len(media) > 0):
                pic.append(media[0]['media_url'])
            else:
                pic.append("")

    j = 0
    while j < len(snsList):
        if j == 10:
            break
        snsList[j] = snsList[j].replace('&lt;', '<')
        snsList[j] = snsList[j].replace('&gt;', '>')
        snsList[j] = snsList[j].replace('▶️', ' ⇒ ')
        j += 1

    mydb = my_client['TwoRolless']
    mycol = mydb['sns']

    for k in range(0, len(snsList)):
        if k == 15:
            break
        x = mycol.insert_one(
            {
                "tag": findtag,
                "time": snsTime[k],
                "text": snsList[k],
                "img": pic[k],
                "url": url[k]
            }
        )


conn_str = ""
my_client = pymongo.MongoClient(conn_str)

if __name__ == '__main__':
    while True:
        print("cycles start")
        mydb = my_client['TwoRolless']
        mycol = mydb['sns']
        mycol.remove({})
        crawllTwit("@m_thelastman", "더라스트맨")
        crawllTwit("@Musical_NarGold", "나르치스와_골드문트")
        crawllTwit("@rndworks", "더데빌")
        crawllTwit("@ninestory9", "엘리펀트송")
        crawllTwit("@companyrang", "쿠로이저택엔누가살고있을까")
        crawllTwit("@companyrang", "난쟁이들")
        crawllTwit("@page1company", "곤투모로우")
        crawllTwit("@HONGcompany", "더모먼트")
        crawllTwit("@orchardmusical", "칠칠")
        crawllTwit("@livecorp2011", "팬레터")
        crawllTwit("@shownote", "젠틀맨스가이드")
        crawllTwit("@od_musical", "지킬앤하이드")
        crawllTwit("@kontentz", "엔딩노트")
        crawllTwit("@i_seensee", "빌리")
        crawllTwit("@doublek_ent", "은하철도의")
        crawllTwit("@Insight_Since96", "뱀파이어아더")
        print("cycle end")
        print("sleep 30 seconds")
        time.sleep(30)
        print("sleep end")
