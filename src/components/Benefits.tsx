import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.66674 16.3334C4.44596 16.3341 4.22951 16.2722 4.04252 16.1548C3.85553 16.0375 3.70568 15.8694 3.61038 15.6703C3.51508 15.4711 3.47825 15.249 3.50416 15.0298C3.53006 14.8105 3.61765 14.6031 3.75674 14.4317L15.3067 2.53169C15.3934 2.43169 15.5114 2.36411 15.6416 2.34005C15.7717 2.31599 15.9061 2.33688 16.0228 2.39928C16.1394 2.46169 16.2314 2.56191 16.2836 2.68349C16.3358 2.80507 16.3452 2.94078 16.3101 3.06836L14.0701 10.0917C14.004 10.2685 13.9818 10.4586 14.0054 10.6459C14.029 10.8331 14.0977 11.0118 14.2055 11.1667C14.3133 11.3216 14.4571 11.448 14.6246 11.535C14.792 11.6221 14.978 11.6673 15.1667 11.6667H23.3334C23.5542 11.6659 23.7706 11.7278 23.9576 11.8452C24.1446 11.9626 24.2945 12.1306 24.3898 12.3298C24.4851 12.5289 24.5219 12.751 24.496 12.9703C24.4701 13.1895 24.3825 13.3969 24.2434 13.5684L12.6934 25.4684C12.6068 25.5684 12.4887 25.6359 12.3586 25.66C12.2285 25.6841 12.0941 25.6632 11.9774 25.6008C11.8607 25.5384 11.7687 25.4381 11.7165 25.3166C11.6643 25.195 11.655 25.0593 11.6901 24.9317L13.9301 17.9084C13.9961 17.7316 14.0183 17.5414 13.9947 17.3542C13.9711 17.167 13.9025 16.9882 13.7946 16.8334C13.6868 16.6785 13.543 16.5521 13.3756 16.465C13.2082 16.3779 13.0221 16.3327 12.8334 16.3334H4.66674Z" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Rápido',
      description: 'Equipos comerciales modernos. Procesos optimizados. Entrega el mismo día *[1].'
      },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0003 25.6667C20.4436 25.6667 25.6671 20.4434 25.6671 14C25.6671 7.55672 20.4436 2.33337 14.0003 2.33337C7.557 2.33337 2.33366 7.55672 2.33366 14C2.33366 20.4434 7.557 25.6667 14.0003 25.6667Z" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 7V14L18.6667 16.3333" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Transparente',
      description: 'Precios claros desde el inicio. Sin sorpresas. Sin letra pequeña.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5932 18.0833C11.4891 17.6796 11.2786 17.3112 10.9838 17.0163C10.6889 16.7214 10.3205 16.511 9.9167 16.4068L2.75919 14.5611C2.63709 14.5266 2.52961 14.4529 2.4531 14.3516C2.37659 14.2504 2.33516 14.127 2.33516 14C2.33516 13.873 2.37659 13.7496 2.4531 13.6484C2.52961 13.5471 2.63709 13.4735 2.75919 13.4388L9.9167 11.592C10.3203 11.4879 10.6887 11.2776 10.9836 10.983C11.2785 10.6884 11.4891 10.32 11.5932 9.91666L13.4389 2.75916C13.4732 2.63656 13.5467 2.52854 13.6481 2.45161C13.7495 2.37467 13.8733 2.33301 14.0005 2.33301C14.1278 2.33301 14.2516 2.37467 14.353 2.45161C14.4544 2.52854 14.5279 2.63656 14.5622 2.75916L16.4068 9.91666C16.5109 10.3204 16.7214 10.6889 17.0163 10.9837C17.3111 11.2785 17.6796 11.489 18.0833 11.5931L25.2408 13.4377C25.3638 13.4716 25.4723 13.545 25.5497 13.6466C25.6271 13.7481 25.6691 13.8723 25.6691 14C25.6691 14.1277 25.6271 14.2518 25.5497 14.3534C25.4723 14.455 25.3638 14.5284 25.2408 14.5623L18.0833 16.4068C17.6796 16.511 17.3111 16.7214 17.0163 17.0163C16.7214 17.3111 16.5109 17.6796 16.4068 18.0833L14.5611 25.2408C14.5268 25.3634 14.4533 25.4714 14.3519 25.5483C14.2505 25.6253 14.1267 25.6669 13.9994 25.6669C13.8721 25.6669 13.7483 25.6253 13.6469 25.5483C13.5455 25.4714 13.472 25.3634 13.4377 25.2408L11.5932 18.0833Z" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.333 3.5V8.16667" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25.6667 5.83337H21" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.66699 19.8334V22.1667" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.83333 21H3.5" stroke="#0000FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Simple',
      description: 'Entiendes qué hacer, cuánto cuesta y cuánto tarda. Sin preguntar.'
    }
  ];

  return (
    <section className="w-full bg-[#EDEFF4] px-5 py-20">
      <div className="max-w-screen-xl xl:w-[1152px] mx-auto my-0">
        <div className="flex justify-center items-center gap-[44px] text-center mb-20">
          <img src="https://res.cloudinary.com/diefluaw7/image/upload/v1767202821/u2216735844_young_professional_laundromat_staff_member_delive_447b5136-0710-48a3-9576-56fe66399549_2_1_pgxgev.png" alt="" className='rounded-[24px] xl:w-[552px] xl:h-[310.5px] ' />
          <div>
          <h2 className="text-black font-poppins text-left text-5xl font-bold leading-[48px] tracking-[-1.2px] mb-10 max-md:text-[40px] max-md:leading-10 max-sm:text-[32px] max-sm:leading-9">
            Lavar tu ropa,
            <br />
            <span className='text-[#003A9E]'>no tiene que ser <br /> pesado</span> 
          </h2>
          <p className='font-poppins xl:text-[18px] xl:leading-[28px] text-[#003A9E] text-left '>
            No somos una lavandería tradicional. Utilizamos tecnología aplicada a un problema cotidiano.
          </p>
          </div>
        </div>
        
        <div className="w-full flex justify-between gap-8 flex-wrap">
          {benefits.map((benefit, index) => (
            <article key={index} className="text-center bg-white xl:p-[33px] max-w-[300px]">
              <div className="flex w-14 h-14 justify-center items-center bg-[rgba(0,0,255,0.10)] mt-0 mb-5 mx-auto p-3.5 rounded-2xl">
                {benefit.icon}
              </div>
              <h3 className="text-black text-xl font-bold leading-7 mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#003A9E] text-base font-normal leading-6">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
