import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight, Link } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Great Designer, does great work and is very flexible with change. If you're a programmer and are looking for UI/UX designer is definitely well qualified for the job.",
    name: "Cameron Williamson",
    role: "Founder of cypexsoft",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    project: "EaseMyKid",
    projectLink: "#",
    videoThumb:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Very professional and quick to respond. Delivered the designs ahead of schedule and the final product was pixel-perfect.",
    name: "Olivia Parker",
    role: "Product Manager at Nova",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&q=80&auto=format&fit=crop",
    project: "NovaApp",
    projectLink: "#",
    videoThumb:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "A designer who truly understands product goals and user needs — excellent communication and follow-through.",
    name: "Marcus Lee",
    role: "CTO at Easybuild",
    avatar:
      "https://images.unsplash.com/photo-1545996124-1b3f6fbf5e3b?w=200&q=80&auto=format&fit=crop",
    project: "EasyBuild",
    projectLink: "#",
    videoThumb:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=1200&q=80&auto=format&fit=crop",
  },
];

const ProfileSlider = () => {
  const swiperRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <section className="w-full bg-[#00362E] py-12">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ================= DESKTOP HEADING (UNCHANGED) ================= */}
        <div className="hidden lg:flex flex-col gap-2 absolute top-1 text-center z-10">
          <button className="bg-white rounded-[22px] w-[113px] text-sm font-medium text-black py-1">
            Testimonial
          </button>
          <h3 className="text-3xl font-medium text-gray-100 mb-8">
            See what my clients says about me
          </h3>
        </div>

        {/* ================= MOBILE HEADING (CARD 1) ================= */}
        <div className="lg:hidden flex flex-col gap-2 mb-6 text-start items-start justify-start">
          <button className="bg-white rounded-[22px] w-[113px]  text-sm font-medium text-black py-1">
            Testimonial
          </button>
          <h3 className="text-2xl font-medium text-gray-100">
            See what my clients says about me
          </h3>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 115000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">

                {/* ================= MOBILE CARD 2: VIDEO ================= */}
                <div className="lg:hidden w-full">
                  <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                    <img
                      src={t.videoThumb}
                      alt=""
                      className="w-full h-[320px] object-cover"
                    />
                  </div>
                </div>

                {/* ================= DESKTOP LEFT SIDE (UNCHANGED) ================= */}
                <div className="flex-1">
                  <div className="bg-emerald-800/80 rounded-xl p-8 text-emerald-50 shadow-md">
                    <img src="/images/Quotes.png" className="size-[40px] mb-4" />
                    <p className="text-lg">{t.quote}</p>

                    <hr className="my-6 border-white" />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xl text-white">{t.project}</div>
                        <div className="text-sm">Project</div>
                      </div>
                      <ArrowRight className="text-white" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={t.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-emerald-200 flex lg:flex-row flex-col gap-2 items-center">
                        {t.role} | <Link className="w-3 h-3" /> cypexsoft.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= DESKTOP RIGHT SIDE (UNCHANGED) ================= */}
                <div className="hidden lg:block w-full lg:w-96">
                  <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                    <img
                      src={t.videoThumb}
                      alt=""
                      className="w-full h-[568px] object-cover"
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= DESKTOP ARROWS (UNCHANGED) ================= */}
        <div className="hidden lg:flex gap-4 absolute left-[36rem] bottom-[6rem] z-10">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setActiveBtn("prev");
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              activeBtn === "prev"
                ? "bg-white text-black"
                : "border-white text-white"
            }`}
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setActiveBtn("next");
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              activeBtn === "next"
                ? "bg-white text-black"
                : "border-white text-white"
            }`}
          >
            <ArrowRight />
          </button>
        </div>

        {/* ================= MOBILE CARD 4: ARROWS ================= */}
        <div className="lg:hidden flex justify-start gap-4 mt-8">
           <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setActiveBtn("prev");
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              activeBtn === "prev"
                ? "bg-white text-black"
                : "border-white text-white"
            }`}
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setActiveBtn("next");
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              activeBtn === "next"
                ? "bg-white text-black"
                : "border-white text-white"
            }`}
          >
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProfileSlider;
