import React from 'react'
import Blogs from './Blogs';
import { useState, useEffect } from 'react';
import '../fonts/ar-archy-regular.ttf';
import Map from './Map';

function Home() {
    const [blogs , setBlogs] = useState([
        { 
            title: "გორის ძველი არქიტექტურული სახე" ,
            body: "გორის ძველი არქიტექტურული სახე ეკოლოგიური და ისტორიული კატასტროფების შედეგად თითქმის ბოლომდეა დაკარგული. ჯერ...",
            img: "/images/1.png",
            id: 1
        },
        { 
            title: "“ომის მეხსიერება ქალაქში”" ,
            body: "2008 წლის ომთან დაკავშირებით, შიდა ქართლში, ზოგადი ცნობიერების ამაღლების მიზნით, 2022 წლის ივლისში გამოცხადდა...",
            img: "/images/2.png",
            id: 2
        },
        { 
            title: "გორის ძველი არქიტექტურული სახე" ,
            body: "გორის ძველი არქიტექტურული სახე ეკოლოგიური და ისტორიული კატასტროფების შედეგად თითქმის ბოლომდეა დაკარგული. ჯერ...",
            img: "/images/3.png",
            id: 3
        },
        { 
            title: "გორის ძველი არქიტექტურული სახე" ,
            body: "გორის ძველი არქიტექტურული სახე ეკოლოგიური და ისტორიული კატასტროფების შედეგად თითქმის ბოლომდეა დაკარგული. ჯერ...",
            img: "/images/1.png",
            id: 4
        },
        { 
            title: "გორის ძველი არქიტექტურული სახე" ,
            body: "გორის ძველი არქიტექტურული სახე ეკოლოგიური და ისტორიული კატასტროფების შედეგად თითქმის ბოლომდეა დაკარგული. ჯერ...",
            img: "/images/2.png",
            id: 5
        },
        { 
            title: "გორის ძველი არქიტექტურული სახე" ,
            body: "გორის ძველი არქიტექტურული სახე ეკოლოგიური და ისტორიული კატასტროფების შედეგად თითქმის ბოლომდეა დაკარგული. ჯერ...",
            img: "/images/3.png",
            id: 6
        }
    ]);

    
    
  return (
    <>
    <div className="main_container">
        <div className="content">
            <div className="left">
                <div className="container">
                    <div className="circle t_left"></div>
                    <div className="circle t_right"></div>
                    <div className="circle b_left"></div>
                    <div className="circle b_right"></div>
                    <h2>გორის კულტურული და ისტორიული პორტრეტი</h2>
                    <div className="more">
                        <p>პროექტის შესახებ</p>
                        <div className="more_info">
                            <h3>საუკუნეთა განმავლობაში გორი იყო ერთ-ერთი ყველაზე საკვანძო ქალაქი საქართველოს ისტორიაში</h3>
                            <span>ნახე მეტი {">>>"}</span>
                        </div>
                    </div>
                </div>
                {/* <Map /> */}
            </div>
            <div className="right">
                <div className="circle t_left"></div>
                <div className="circle t_right"></div>
                <div className="circle b_left"></div>
                <div className="circle b_right"></div>
                    <div className="inner_container">
                        <Blogs blogs={blogs} />
                    </div>
            </div>
        </div>
        <footer>
            <p>ვებგვერდი შეიქმნა ინფორმაციის თავისუფლების განვითარების ინსტიტუტის (IDFI) მიერ, ამერიკელი ხალხის დახმარებით, ამერიკის შეერთებული შტატების საერთაშორისო განვითარების სააგენტოსა (USAID) და Zinc Newtork-ის ფინანსური მხარდაჭერით</p>
        </footer>
    </div>
    </>
  )
}

export default Home