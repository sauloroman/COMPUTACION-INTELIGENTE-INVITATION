import { useEffect } from "react"
import { useGuest, useUI } from "../hooks";
import { 
  Gratitude, 
  Hero, 
  Location, 
  Event, 
  Students, 
  Timer, 
  DressingCode,
  Hashtag,
  Ticket,
  Footer,
  Promo
} from "./sections"
import { Modal } from "./components/Modal";

export const InvitationPage = () => {

  const { getStudents } = useGuest();
  const { modal: { isOpen, content, titleModal } } = useUI();

  useEffect(() => {
    students();

    const animation = new ScrollReveal({ reset: true, duration: 2000, delay: 1500 });
    animation.reveal('.layout-grid', { distance: '15px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.hero__congratulation', { distance: '25px', origin: 'left', scale: 1.2 } );
    animation.reveal('.hero__birrete', { distance: '25px', origin: 'left', scale: 1.2 } );
    animation.reveal('.hero__career', { distance: '25px', origin: 'right' } );
    animation.reveal('.hero__name', { distance: '25px', origin: 'right' } );
    animation.reveal('.hero__corner', { distance: '25px', origin: 'right' } );
    animation.reveal('.hero__flowers', { distance: '25px', origin: 'bottom' } );
    animation.reveal('.hero__generation', { distance: '25px', origin: 'bottom' } );
    animation.reveal('.timer__title', { distance: '25px', origin: 'right', scale: 1.05 } );
    animation.reveal('.timer__content' );
    animation.reveal('.students__title', { distance: '25px', origin: 'top', scale: 1.05 } );
    animation.reveal('.students__logo', { distance: '25px', origin: 'top', scale: 1.05 } );
    animation.reveal('.slider', { distance: '25px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.hashtag__title', { distance: '25px', origin: 'top', scale: 1.05 } );
    animation.reveal('.hashtag__hash', { distance: '25px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.dressing__title', { distance: '25px', origin: 'left', scale: 1.05 } );
    animation.reveal('.dressing__image', { distance: '25px', origin: 'right', scale: 1.05 } );
    animation.reveal('.footer__title', { distance: '25px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.footer__generation', { distance: '25px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.footer__career', { distance: '25px', origin: 'bottom', scale: 1.05 } );
    animation.reveal('.ticket__container', { distance: '25px', origin: 'bottom', scale: 1.5 } );

  }, []);

  const students = async () => {
    await getStudents();
  }

  return (
    <>
      <Hero />
      <Gratitude />
      <Location />
      <Timer />
      <Students />
      <Event />
      <Hashtag />
      <DressingCode />
      <Ticket />
      <Footer />
      <Promo /> 
      { isOpen && <Modal titleModal={ titleModal } contentModal={ content } /> }
    </>
  )
}
