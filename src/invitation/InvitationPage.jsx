import { useEffect } from "react"
import { useTicket, useUI } from "../hooks";
import { 
  Hero, 
  Location, 
  DressCode, 
  Students, 
  Timer, 
  Hashtag,
  Promo,
  Student,
  Itinerary,
} from "./sections"
import { ButtonsNav } from "./components/ButtonsNav";
import { AsideBar } from "./components/AsideBar";

export const InvitationPage = () => {

  const { closeMenu } = useUI();
  const { getTicketsOfEvent } = useTicket();

  useEffect(() => {
    closeMenu();
    getTicketsOfEvent();
    const animation = new ScrollReveal({ reset: true, duration: 2000, delay: 1500 });

    animation.reveal('[ class*="__line"]', { origin: 'top', distance: '20px'})
    animation.reveal('.student', { origin: 'left', distance: '100px'} );
    animation.reveal('.timer', { scale: 1.2 })
    animation.reveal('.location', { origin: 'right', distance: '100px'} );
    animation.reveal('.hashtag', { origin: 'top', distance: '100px'} );
    animation.reveal('.students', { origin: 'bottom', distance: '100px'} );
    animation.reveal('.itinerary__item:nth-child(even)', { origin: 'left', distance: '50px'} );
    animation.reveal('.itinerary__item:nth-child(odd)', { origin: 'right', distance: '50px'} );
    animation.reveal('.dress', { scale: 1.2 })
  
  }, []);

  return (
    <>
      <div className="site">
        <ButtonsNav />
        <Hero />
        <Student />
        <Timer />
        <Location />
        <Hashtag />
        <Students />
        <Itinerary />
        <DressCode />
      </div>
      <AsideBar />
      <Promo /> 
    </>
  )
}
