import React from 'react'
import Map from './Map';

function Home() {
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
                            {/* <span>ნახე მეტი >>> </span> */}
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
                        <div>sadsadsadasdasd</div>
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