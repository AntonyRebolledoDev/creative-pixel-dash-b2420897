import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="w-full bg-white pt-[61px] pb-32 px-5">
      <div className="max-w-[1400px] mx-auto my-0">
        <div className="text-center mb-20">
          <div className="inline-flex justify-center items-center bg-[rgba(74,128,222,0.20)] mb-5 px-4 py-1.5 rounded-full">
            <span className="text-[#4A80DE] text-center text-sm font-medium leading-5">
              Servicios
            </span>
          </div>
          <h2 className="text-black text-center text-5xl font-bold leading-[48px] tracking-[-1.2px] mb-5 max-md:text-[40px] max-md:leading-10 max-sm:text-[32px] max-sm:leading-9">
            Dos soluciones,
            <br />
            un mismo estándar
          </h2>
          <p className="text-[#003A9E] text-center text-lg font-normal leading-7 mb-[60px]">
            Elige cómo quieres lavar. Nosotros garantizamos la misma calidad y
            eficiencia.
          </p>
        </div>
        
        <div className="flex justify-center items-start gap-8 flex-wrap">
          {/* Self-Service Card */}
          <article className="w-full max-w-[496px] border shadow-[0_1px_3px_0_rgba(0,0,0,0.12),0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden bg-white rounded-3xl border-solid border-gray-200">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/49fbb81c47869c5604747fa44a42870e3d454604?width=988"
              alt="Servicio de autolavado en A LAVAR"
              className="w-full h-[275px] object-cover"
            />
            <div className="p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex w-14 h-14 justify-center items-center bg-[#00F] p-3.5 rounded-2xl">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66674 16.3334C4.44596 16.3341 4.22951 16.2722 4.04252 16.1548C3.85553 16.0375 3.70568 15.8694 3.61038 15.6703C3.51508 15.4711 3.47825 15.249 3.50416 15.0298C3.53006 14.8105 3.61765 14.6031 3.75674 14.4317L15.3067 2.53169C15.3934 2.43169 15.5114 2.36411 15.6416 2.34005C15.7717 2.31599 15.9061 2.33688 16.0228 2.39928C16.1394 2.46169 16.2314 2.56191 16.2836 2.68349C16.3358 2.80507 16.3452 2.94078 16.3101 3.06836L14.0701 10.0917C14.004 10.2685 13.9818 10.4586 14.0054 10.6459C14.029 10.8331 14.0977 11.0118 14.2055 11.1667C14.3133 11.3216 14.4571 11.448 14.6246 11.535C14.792 11.6221 14.978 11.6673 15.1667 11.6667H23.3334C23.5542 11.6659 23.7706 11.7278 23.9576 11.8452C24.1446 11.9626 24.2945 12.1306 24.3898 12.3298C24.4851 12.5289 24.5219 12.751 24.496 12.9703C24.4701 13.1895 24.3825 13.3969 24.2434 13.5684L12.6934 25.4684C12.6068 25.5684 12.4887 25.6359 12.3586 25.66C12.2285 25.6841 12.0941 25.6632 11.9774 25.6008C11.8607 25.5384 11.7687 25.4381 11.7165 25.3166C11.6643 25.195 11.655 25.0593 11.6901 24.9317L13.9301 17.9084C13.9961 17.7316 14.0183 17.5414 13.9947 17.3542C13.9711 17.167 13.9025 16.9882 13.7946 16.8334C13.6868 16.6785 13.543 16.5521 13.3756 16.465C13.2082 16.3779 13.0221 16.3327 12.8334 16.3334H4.66674Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black text-2xl font-bold leading-8 tracking-[-0.6px]">
                    Autoservicio
                  </h3>
                  <p className="text-[#003A9E] text-sm font-normal leading-5">
                    Tú controlas tu tiempo
                  </p>
                </div>
              </div>
              
              <p className="text-[#003A9E] text-base font-normal leading-6 mb-8">
                Equipos comerciales modernos a tu disposición. Rápido,
                autónomo y ajustado a tus tiempos.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  'Equipos comerciales modernos',
                  'Proceso visible y entendible',
                  'Sin filas, sin fricción',
                  'Espacios limpios y ordenados'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z" stroke="#0000FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 9.99992L9.16667 11.6666L12.5 8.33325" stroke="#0000FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-black text-sm font-normal leading-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <hr className="mb-5 border-t border-solid border-gray-200" />
              
              <div className="mb-5 p-[26px] rounded-2xl border-2 border-solid border-[#00F]">
                <h4 className="text-[#00F] text-xs font-bold leading-4 tracking-[0.6px] uppercase mb-4">
                  PRECIOS (Lavado y secado)
                </h4>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[#003A9E] text-sm font-medium leading-5 mb-2">
                      Máquinas chicas
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#00F] text-4xl font-bold leading-10">
                        $80
                      </span>
                      <span className="text-[#4A80DE] text-sm font-normal leading-5">
                        MXN
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gray-200" />
                  <div>
                    <p className="text-[#003A9E] text-sm font-medium leading-5 mb-2">
                      Máquinas grandes
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#00F] text-4xl font-bold leading-10">
                        $125
                      </span>
                      <span className="text-[#4A80DE] text-sm font-normal leading-5">
                        MXN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z" stroke="#4A80DE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 5V10L13.3333 11.6667" stroke="#4A80DE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#003A9E] text-sm font-normal leading-5">
                  Ciclo de Lavado y Secado ~80 min
                </span>
              </div>
            </div>
          </article>

          {/* Full Service Card */}
          <article className="w-full max-w-[496px] shadow-[0_1px_3px_0_rgba(0,0,0,0.12),0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a4fd8] to-[#003A9E]">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/75d11e288cfe9cccab7a2b6c900992ffd36c6532?width=992"
                alt="Ropa limpia y doblada del servicio de lavado por encargo"
                className="w-full h-[279px] object-cover"
              />
              <div className="inline-flex justify-center items-center backdrop-blur-[2px] absolute bg-[#00F] px-3 py-1 rounded-full right-3.5 top-3.5">
                <span className="text-white text-sm font-medium leading-5">
                  Más popular
                </span>
              </div>
            </div>
            
            <div className="p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex w-14 h-14 justify-center items-center backdrop-blur-[2px] bg-[rgba(255,255,255,0.20)] p-3.5 rounded-2xl">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.7771 4.03659L18.6671 2.33325C18.6671 3.57093 18.1754 4.75791 17.3002 5.63308C16.4251 6.50825 15.2381 6.99992 14.0004 6.99992C12.7627 6.99992 11.5758 6.50825 10.7006 5.63308C9.82541 4.75791 9.33375 3.57093 9.33375 2.33325L4.22375 4.03659C3.69569 4.21251 3.24792 4.5714 2.96124 5.04849C2.67457 5.52557 2.56787 6.08941 2.66041 6.63825L3.33708 10.6866C3.3815 10.9606 3.52221 11.2099 3.73391 11.3895C3.94561 11.5691 4.21444 11.6674 4.49208 11.6666H7.00041V23.3333C7.00041 24.6166 8.05041 25.6666 9.33375 25.6666H18.6671C19.2859 25.6666 19.8794 25.4208 20.317 24.9832C20.7546 24.5456 21.0004 23.9521 21.0004 23.3333V11.6666H23.5087C23.7864 11.6674 24.0552 11.5691 24.2669 11.3895C24.4786 11.2099 24.6193 10.9606 24.6637 10.6866L25.3404 6.63825C25.433 6.08941 25.3263 5.52557 25.0396 5.04849C24.7529 4.5714 24.3051 4.21251 23.7771 4.03659Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold leading-8 tracking-[-0.6px]">
                    Lavado por encargo
                  </h3>
                  <p className="text-[rgba(255,255,255,0.80)] text-sm font-normal leading-5">
                    Nosotros nos encargamos
                  </p>
                </div>
              </div>
              
              <p className="text-[rgba(255,255,255,0.90)] text-base font-normal leading-6 mb-8">
                La solución perfecta para gente ocupada. Delega sin culpa y
                recibe tu ropa impecable el mismo día.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  'Precio claro: $30/kg',
                  'Entrega el mismo día *[1]',
                  'Lavado + secado + doblado',
                  'Seguimiento por WhatsApp'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 9.99992L9.16667 11.6666L12.5 8.33325" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`text-sm font-normal leading-5 ${item.includes('*[1]') ? 'text-white underline' : 'text-white'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <hr className="mb-5 border-t-[rgba(255,255,255,0.20)] border-t border-solid" />
              
              <div className="mb-5 p-4 rounded-2xl border-2 border-white border-opacity-20 bg-gradient-to-r from-blue-500/10 to-blue-600/10">
                
                <div className="text-center">
                  <span className="text-white text-6xl font-bold">$30</span>
                  <span className="text-white text-lg ml-2">MXN</span>
                </div>
                <h4 className="text-white text-xs font-bold leading-4 tracking-[0.6px] uppercase mb-4 text-center">
                  PRECIO POR KG
                </h4>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4887 2.15508C10.1762 1.8425 9.75232 1.66684 9.31033 1.66675H3.33366C2.89163 1.66675 2.46771 1.84234 2.15515 2.1549C1.84259 2.46746 1.66699 2.89139 1.66699 3.33341V9.31008C1.66709 9.75207 1.84274 10.1759 2.15533 10.4884L9.40866 17.7417C9.78742 18.1181 10.2997 18.3294 10.8337 18.3294C11.3676 18.3294 11.8799 18.1181 12.2587 17.7417L17.742 12.2584C18.1184 11.8797 18.3296 11.3674 18.3296 10.8334C18.3296 10.2995 18.1184 9.78718 17.742 9.40841L10.4887 2.15508Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.24967 6.66659C6.47979 6.66659 6.66634 6.48004 6.66634 6.24992C6.66634 6.0198 6.47979 5.83325 6.24967 5.83325C6.01956 5.83325 5.83301 6.0198 5.83301 6.24992C5.83301 6.48004 6.01956 6.66659 6.24967 6.66659Z" fill="white" fillOpacity="0.9" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <div className="text-[rgba(255,255,255,0.90)] text-xl font-semibold leading-5">
                    $80-$175 MXN
                  </div>
                  <div className="text-[rgba(255,255,255,0.90)] text-sm font-normal leading-5">
                    Edredones y Hamacas
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <div className="text-center mt-[60px]">
          <button className="inline-flex justify-center items-center shadow-[0_4px_14px_0_rgba(0,0,255,0.40)] gap-[13px] bg-[#00F] pt-[11px] pb-3 px-[34px] rounded-xl hover:bg-blue-700 transition-colors">
            <span className="text-white text-center text-lg font-bold leading-7">
              Ver detalle de precios
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 8H12.6663" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 3.3335L12.6667 8.00016L8 12.6668" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
