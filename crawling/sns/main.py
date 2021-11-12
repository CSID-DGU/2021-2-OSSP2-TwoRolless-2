# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
twitter_consumer_key = ""
twitter_consumer_secret = ""
twitter_access_token = ""
twitter_access_secret = ""
# python twitter API key

import twitter
import csv
import json
import time

twitter_api = twitter.Api(consumer_key=twitter_consumer_key,
                          consumer_secret=twitter_consumer_secret,
                          access_token_key=twitter_access_token,
                          access_token_secret=twitter_access_secret,
                          tweet_mode='extended')

indexLength = 0
def time_ko(text): # time string 
    day = ''
    date = ''
    month = ''
    year = ''
    clock = ''
    text_list = text.split()

    if text_list[1] == 'Jan':
        text_list[1] = '01'
    elif text_list[1] == 'Feb':
        text_list[1] = '02'
    elif text_list[1] == 'Mar':
        text_list[1] = '03'
    elif text_list[1] == 'Apr':
        text_list[1] = '04'
    elif text_list[1] == 'May':
        text_list[1] = '05'
    elif text_list[1] == 'Jun':
        text_list[1] = '06'
    elif text_list[1] == 'Jul':
        text_list[1] = '07'
    elif text_list[1] == 'Aug':
        text_list[1] = '08'
    elif text_list[1] == 'Sep':
        text_list[1] = '09'
    elif text_list[1] == 'Oct':
        text_list[1] = '10'
    elif text_list[1] == 'Nov':
        text_list[1] = '11'
    elif text_list[1] == 'Dec':
        text_list[1] = '12'
    else:
        text_list[1] = '오류'

    return("["+text_list[5]+"."+text_list[1]+"."+text_list[2]+" "+text_list[3]+"]")


def crawllTwit(snsname, findtag): # sns태그, 극 이름으로 태그 설정 
    global indexLength
    account = snsname
    statuses = twitter_api.GetUserTimeline(screen_name=account, count=100, include_rts=True, exclude_replies=False)
    snsList = []
    snsTime = []
    i = 0
    for status in statuses:
        flag = status.full_text.find(findtag)
        if flag >= 0:
            snsList.append(status.full_text)
            snsTime.append(status.created_at)
            i += 1
    j = 0
    while j < len(snsList):
        if j == 10:
            break
        snsList[j] = snsList[j].replace('&lt;', '<')
        snsList[j] = snsList[j].replace('&gt;', '>')
        snsList[j] = snsList[j].replace(' ▶️', ' ⇒ ')
        j += 1

    for k in range(0, len(snsList)):
        if k == 10:
            break
        temp = dict()
        temp["tag"] = findtag
        temp["time"] = time_ko(snsTime[k])
        temp["text"] = snsList[k]
        twitterFile[indexLength] = temp
        indexLength += 1

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    while True:
        print("cycles start")
        indexLength = 0
        twitterFile = dict()
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
        crawllTwit("@CEF56xyFgPDj", "트위터") # 테스트 계정
        with open('경로', 'w', encoding='UTF-8-sig') as make_file: # 경로 지정 
            json.dump(twitterFile, make_file, indent="\t", ensure_ascii=False)
        print("cycle end")
        print("sleep 30 second")
        time.sleep(30)
        print("sleep end")



# See PyCharm help at https://www.jetbrains.com/help/pycharm/
