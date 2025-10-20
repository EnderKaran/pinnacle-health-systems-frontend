// src/pages/PartnersPage.jsx

import React from 'react';
import { cn } from "../lib/utils";
import BlurIn from '../components/magicui/blur-in';
import Marquee from '../components/ui/marquee';

const PartnerCard = ({ name }) => {
  return (
    <figure
      className={cn(
        "relative flex h-24 w-48 cursor-pointer items-center justify-center overflow-hidden rounded-xl border p-4",       
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-gray-700">{name}</span>
      </div>
    </figure>
  );
};

const partners = [
  { name: "TechCorp", username: "@techcorp" },
  { name: "HealthWell", username: "@healthwell" },
  { name: "InnovateIO", username: "@innovateio" },
  { name: "Quantum Solutions", username: "@quantum" },
  { name: "MedLife", username: "@medlife" },
  { name: "BioGen", username: "@biogen" },
  { name: "Synergy Inc.", username: "@synergy" },
  { name: "NextGen Pharma", username: "@nextgen" },
  { name: "Vitality Labs", username: "@vitality" },
  { name: "CarePlus", username: "@careplus" },
  { name: "Digital Health", username: "@digitalhealth" },
  { name: "FutureMeds", username: "@futuremeds" },
];

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);


const PartnersPage = () => {
  return (
    <>
      {/* Hero Bölümü  */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <BlurIn
            word="Değerli Ortaklarımız"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Sağlık hizmetlerinde mükemmelliğe ulaşma yolculuğumuzda bize destek olan tüm iş ortaklarımıza teşekkür ederiz."
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>
      </section>

      {/* Ortaklar Marquee Bölümü */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Birlikte Güçlüyüz</h2>
          
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:50s]">
              {firstRow.map((partner) => (
                <PartnerCard key={partner.username} {...partner} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {secondRow.map((partner) => (
                <PartnerCard key={partner.username} {...partner} />
              ))}
            </Marquee>
            {/* Kenar yumuşatma gradyanları */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
        </div>
      </section>

      {/* Partner Olma CTA'sı */}
      <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-800">Ortaklık Programımıza Katılın</h2>
              <p className="mt-4 text-lg text-gray-600">
                  Sağlık sektöründe pozitif bir etki yaratmak için bizimle iş birliği yapın. Potansiyel ortaklık fırsatları için ekibimizle iletişime geçin.
              </p>
              <div className="mt-8">
                  <button className="btn btn-primary btn-lg">İletişime Geçin</button>
              </div>
          </div>
      </section>
    </>
  );
};

export default PartnersPage;