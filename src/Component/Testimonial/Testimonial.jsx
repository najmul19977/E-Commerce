import React from 'react';
import img1 from '../../assets/image/img1.jpg';
import img2 from '../../assets/image/img2.jpg';
import img3 from '../../assets/image/img3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const Testimonial = () => {
    return (
        <div>
      <h2 className="text-5xl font-serif font-semibold mt-20 mb-20 text-primary">
        People Says...
      </h2>
      <div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <p className="font-serif font-semibold text-xl md:ml-40 md:mr-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                eveniet aut consectetur neque, facilis velit. Voluptas, quam
                nemo voluptates, asperiores tenetur illo modi voluptatum, sed
                minima eveniet itaque. Mollitia, qui!
              </p>
              <div className="avatar mt-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img1} />
                  
                </div>
               
              </div>
              <p className="font-serif font-semibold mt-4 mb-10">najmul Kabir</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="font-serif font-semibold text-xl md:ml-40 md:mr-40">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus animi sequi odit rem assumenda, doloribus autem eum
                aperiam, quaerat culpa rerum dolorum modi. Quam aliquam
                veritatis nihil, id fuga alias.
              </p>
              <div className="avatar mt-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img2} />
                  
                </div>
               
              </div>
              <p className="font-serif font-semibold mt-4 mb-10">najmul Kabir</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="font-serif font-semibold text-xl md:ml-40 md:mr-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ullam quis, et nam voluptatum quasi laudantium at esse
                perferendis fuga sunt quisquam quod nemo rerum earum! Eos
                pariatur ducimus voluptatibus.
              </p>
              <div className="avatar mt-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img3} />
                  
                </div>
               
              </div>
              <p className="font-serif font-semibold mt-4 mb-10">najmul Kabir</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="font-serif font-semibold text-xl md:ml-40 md:mr-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                perspiciatis natus dolor, nam ex expedita consectetur, id
                obcaecati, dolores reiciendis voluptas saepe aliquam laborum
                repellat doloremque non quia labore corrupti?
              </p>
              <div className="avatar mt-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img1} />
                  
                </div>
               
              </div>
              <p className="font-serif font-semibold mt-4 mb-10">najmul Kabir</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="font-serif font-semibold text-xl md:ml-40 md:mr-40 mb-10">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus autem itaque minus tempore voluptatum expedita
                molestias soluta reprehenderit, reiciendis saepe doloribus
                voluptas quam quia eligendi libero et ab id iste!"
              </p>
              <div className="avatar mt-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img2} />
                  
                </div>
               
              </div>
              <p className="font-serif font-semibold mt-4 mb-10">najmul Kabir</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    );
};

export default Testimonial;