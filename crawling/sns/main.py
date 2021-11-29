# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
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
    tweets = api.user_timeline(screen_name=account, count=100, include_rts=True, exclude_replies=False, tweet_mode='extended')

    snsList = []
    snsTime = []
    pic = []

    i = 0
    for tweet in tweets:
        flag = tweet.full_text.find(findtag)
        if flag >= 0:
            snsList.append(tweet.full_text)
            snsTime.append(tweet.created_at)
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

    mydb = my_client['test']
    mycol = mydb['tweetSNS']

    for k in range(0, len(snsList)):
        if k == 15:
            break
        x = mycol.insert_one(
            {
                "tag": findtag,
                "time": snsTime[k],
                "text": snsList[k],
                "img": pic[k]
            }
        )

my_client = MongoClient("mongodb://localhost:27017/")

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    while True:
        print("cycles start")
        mydb = my_client['test']
        mycol = mydb['tweetSNS']
        mycol.remove({})
        crawllTwit("@M_dogcat21", "개와 고양이의 시간")
        crawllTwit("@Trace_U", "트레이스유")
        crawllTwit("@T2N_Media", "분장실")
        crawllTwit("@m_bkaramazov", "브라더스까라마조프")
        crawllTwit("@MJStarfish", "v에버애프터")
        crawllTwit("@kontentz", "엔딩노트")
        crawllTwit("@rndworks", "더데빌")
        crawllTwit("@rndworks", "카포네트릴로지")
        crawllTwit("@HONGcompany", "더모먼트")
        crawllTwit("@HONGcompany", "미인")
        crawllTwit("@companyrang", "풍월주")
        crawllTwit("@parkcompany1", "이토록보통의")
        crawllTwit("@parkcompany1", "리어왕")
        crawllTwit("@i_seensee", "빌리 엘리어트")
        crawllTwit("@page1company", "곤투모로우")
        crawllTwit("@od_musical", "지킬앤하이드")
        crawllTwit("@shownote", "젠틀맨스가이드")
        crawllTwit("@shownote", "헤드윅")
        crawllTwit("@mpncompany", "타락천사")
        crawllTwit("@mpncompany", "스핏파이어그릴")
        crawllTwit("@HJCULTURE", "어린왕자")
        crawllTwit("@thebestplays", "렁스")
        crawllTwit("@thebestplays", "마우스피스")
        crawllTwit("@ninestory9", "아가사")
        crawllTwit("@ninestory9", "엘리펀트송")
        crawllTwit("@czac2021", "멸화군")
        crawllTwit("@Insight_Since96", "보도지침")
        crawllTwit("@Insight_Since96", "뱀파이어아더")
        crawllTwit("@clipservice", "메이사의노래")
        crawllTwit("@clipservice", "작은아씨들")
        crawllTwit("@clipservice", "하데스타운")
        crawllTwit("@doublek_ent", "인사이드")
        crawllTwit("@CEF56xyFgPDj", "트위터")
        print("cycle end")
        print("sleep 30 seconds")
        time.sleep(30)
        print("sleep end")


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
