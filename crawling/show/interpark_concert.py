from selenium import webdriver as wd
from selenium.webdriver.common.by import By
from urllib.request import urlopen
from bs4 import BeautifulSoup
import os
import time
import requests
from selenium import webdriver as wd
from selenium.webdriver.common.by import By
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json
from collections import OrderedDict
import pymongo
from pymongo import MongoClient
from pymongo.cursor import CursorType


# 인터파크 티켓 콘서트 전체 목록 ㄱㄴㄷ순
main_url="http://ticket.interpark.com/TPGoodsList.asp?Ca=Liv&Sort=4"
html=urlopen(main_url)
soup=BeautifulSoup(html,"html.parser")

a=soup.find_all(attrs={'class':'fw_bold'})
#print("뮤지컬 수: ",len(a))


n=0
title=[] # 콘서트 제목 

# 콘서트 제목 추출
for i in a:
    title.append(i.text.strip('\n'))


# online공연 제외, url 추출
place_and_date = soup.find_all(class_='Rkdate')  # 장소와 기간
titles = soup.find_all(class_='fw_bold') # 모든 제목 목록
 
fin_url=[] #최종 url 목록(md제외)
fin_title=[] #최종 title목록(md제외)

places = [] #장소와 기간에서 장소만 추출 -> online 제외하기위해서

for i in place_and_date:
    if not i.find('a'):
        continue
    places.append(i) 

online=[] # 전체에서 online 공연만 추출

for place, title in zip(places, titles):
    tname = title.find('a').text # 제목 text
    url = title.find('a')['href'] #url
    
    if('프로그램북' in tname or 'md' in tname or 'ost' in tname or 'OST' in tname):
        if('패키지' not in tname):
            continue # 제외하는 것들

    
    if ('온라인' in place.find('a')):
        online.append(tname) # 온라인 공연 목록
        continue
                
    fin_url.append(url) # 제외할거 제외한 뒤 url
    fin_title.append(tname) #제외할거 제외한 뒤 title

#뒤 number만 저장하는 list
num=[]

for i in fin_url:
    #print(i[-8:])
    num.append(i[-8:])


#실제 url
new_url=[]
#print(len(fin_url))

for i in range(len(fin_url)):
    new_url.append("https://tickets.interpark.com/goods/"+num[i])
    #print(new_url[i])

#상세 페이지 동적 크롤링

def crawling(url):
    driver = wd.Chrome(executable_path='C:/Users/ellka/Downloads/chromedriver')   
    driver.get(url)
    #driver.find_element(By.CLASS_NAME, 'popupCheckLabel').click()
    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser')
    
    #기본 상세정보 value 가져오기
    
    poster=soup.find(class_='posterBoxImage')
    p_url="https:"+poster['src'] # 포스터 image
    
    title=soup.find(attrs={'class':'prdTitle'}).text # 뮤지컬명
    place=soup.find(attrs={'class':'infoBtn'}).text  # 장소
    info=soup.find_all(attrs={'class':'infoText'})   # 상세정보

    info_text=[]

    info_text.append(title)
    info_text.append(place[:-5])

    for i in info:
        info_text.append(i.text)
        
    #기본 상세정보 label 가져오기
    
    l=soup.find_all(class_='infoLabel')
    label=['제목']
    
    for i,v in enumerate(l):
        label.append(v.text)
    
    # label에 "혜택" index 제거
    label.pop()
    
    # 좌석, 가격 정보 가져오기
    
    s=soup.find_all('span',class_='name')
    p=soup.find_all('span',class_='price')

    seat=[]
    price=[]

    for i in s:
        seat.append(i.text)
    for i in p:
        price.append(i.text)
        
    # 컨텐츠 제목 가져오기
        
    a=soup.find_all(class_='contentTitle')
    content_title=[]

    for i in range(len(a)):
        content_title.append(a[i].text)
        
    # 캐스팅 목록 가져오기
    # 캐스팅이 존재 할 때만 가져오기
    casting=[]

    if("캐스팅" in content_title):    
        c=soup.find_all(class_='castingName')
        
        for i in c:
            casting.append(i.text)

        
    detail=soup.find_all(class_="contentDetail")
    
    time=[]
    notice=[]
    discount=[]
    schedule=[]

    for i in range(len(detail)):
        if(content_title[i]=="공연시간 정보"):
            time.append(detail[i].text.strip())
        elif(content_title[i]=="공지사항"):
            if('Untitled' not in detail[i].text.strip()):
                notice.append(detail[i].text.strip())
            img1=detail[i].find_all('img')
            for j in img1:
                notice.append("http:"+j['src'])
        elif(content_title[i]=="할인정보"):
            if('Untitled' not in detail[i].text.strip()):
                discount.append(detail[i].text.strip())
            img2=detail[i].find_all('img')
            for j in img2:
                discount.append("http:"+j['src'])
        elif(content_title[i]=="공연상세 / 캐스팅일정"):
            if('Untitled' not in detail[i].text.strip()):
                schedule.append(detail[i].text.strip())
            img3=detail[i].find_all('img')
            for j in img3:
                schedule.append("http:"+j['src'])
        
    
    # 열었던 페이지 닫기
    driver.close()

    #가격
    money=[]

    for i in range(len(seat)):
        money.append(seat[i]+" : "+price[i])
 

    mydb = my_client['TwoRolless']
    mycol = mydb['off_cons']
    x = mycol.insert_one(
            {
                "title":info_text[0],
                "place":info_text[1],
                "period":info_text[2],
                "time":info_text[3],
                "age":info_text[4],
                "poster": p_url,
                "price": money,
                "casting": casting,
                "timeinfo": time,
                "notice":notice,
                "discount":discount,
                "schedule":schedule

            }
        )

        

        
    driver.quit()


conn_str = "mongodb+srv://Yujin:tworolless00@tworolless.cwje0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
my_client = pymongo.MongoClient(conn_str)

if __name__ == '__main__':
    mydb = my_client['TwoRolless']
    mycol = mydb['off_cons']
    mycol.remove({})


    for i in range(len(new_url)):
        try:
            print(i,"번째 크롤링")
            crawling(new_url[i])
        except Exception as e:
            print(i,"번째에서 오류: ",e)




