"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { CheckCircle, Crown, Flower2, Sparkles, Star, Truck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="FLORA SHOP"
          navItems={[
            { name: "Bouquets", id: "collections" },
            { name: "Why Us", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Delivery", id: "contact" },
            { name: "Contact", id: "https://wa.me/212771849782" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="FLORA SHOP"
          description="Fleuriste Marrakech – Livraison de fleurs le jour même. Des bouquets élégants et frais, livrés rapidement à domicile partout à Marrakech."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "📞 Appeler Maintenant", href: "tel:+212771849782" },
            {
              text: "💬 Commander sur WhatsApp",              href: "https://wa.me/212771849782?text=Bonjour,%20je%20souhaite%20commander%20des%20fleurs"
            },
          ]}
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/exotic-rustic-bunch-flowers-mixed-colors_114579-1969.jpg"
          imageAlt="Beautiful luxury flowers arrangement"
          frameStyle="card"
          mediaAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Pourquoi Choisir FLORA SHOP?"
          description="Découvrez ce qui nous rend uniques et pourquoi des milliers de clients nous font confiance à Marrakech."
          tag="Nos Avantages"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Livraison le Même Jour",              description:
                "Commandez avant l'après-midi et recevez vos fleurs le même jour à Marrakech.",              imageSrc:
                "http://img.b2bpic.net/free-photo/female-florist-promoting-mixed-flower-basket_114579-2775.jpg",              imageAlt: "Same-day delivery service"
            },
            {
              id: 2,
              title: "Fleurs Fraîches Quotidiennes",              description:
                "Sélection quotidienne de fleurs fraîches et de qualité supérieure directement du marché.",              imageSrc:
                "http://img.b2bpic.net/free-photo/flowers-background_23-2148011026.jpg",              imageAlt: "Fresh daily flowers"
            },
            {
              id: 3,
              title: "De Confiance",              description:
                "⭐ 4.9/5 étoiles de plus de 50 clients satisfaits. Service professionnel et courtois.",              imageSrc:
                "http://img.b2bpic.net/free-photo/female-florist-promoting-mixed-flower-basket_114579-2775.jpg",              imageAlt: "Trusted service"
            },
            {
              id: 4,
              title: "Fleuristes Professionnels",              description:
                "Équipe expérimentée capable de créer des arrangements personnalisés selon vos besoins.",              imageSrc:
                "http://img.b2bpic.net/free-photo/flowers-background_23-2148011026.jpg",              imageAlt: "Professional florists"
            },
          ]}
        />
      </div>

      <div id="collections" data-section="collections">
        <ProductCardTwo
          title="Nos Collections de Bouquets"
          description="Parcourez notre sélection de bouquets élégants pour toutes les occasions spéciales."
          tag="Collections"
          tagIcon={Flower2}
          textboxLayout="default"
          useInvertedBackground={true}
          products={[
            {
              id: "1",              brand: "FLORA SHOP",              name: "Bouquet Romantique",              price: "299 DH",              rating: 5,
              reviewCount: "240+",              imageSrc:
                "http://img.b2bpic.net/free-photo/composition-valentine39s-day-with-gift-box-bouquet-roses_169016-25825.jpg",              imageAlt: "Romantic rose bouquet"
            },
            {
              id: "2",              brand: "FLORA SHOP",              name: "Fleurs d'Anniversaire",              price: "249 DH",              rating: 5,
              reviewCount: "185+",              imageSrc:
                "http://img.b2bpic.net/free-photo/beautiful-bunch-flowers-wooden-background-horizontal-view-from_1220-1133.jpg",              imageAlt: "Colorful birthday flowers"
            },
            {
              id: "3",              brand: "FLORA SHOP",              name: "Fleurs de Mariage",              price: "499 DH",              rating: 5,
              reviewCount: "95+",              imageSrc:
                "http://img.b2bpic.net/free-photo/beautiful-young-woman-wedding-dress-posing-street-city_1328-3155.jpg",              imageAlt: "Elegant wedding bouquet"
            },
            {
              id: "4",              brand: "FLORA SHOP",              name: "Boîte de Luxe",              price: "399 DH",              rating: 5,
              reviewCount: "168+",              imageSrc:
                "http://img.b2bpic.net/free-photo/day-beauti-flowers-flower-white_1303-2012.jpg",              imageAlt: "Premium luxury flower box"
            },
            {
              id: "5",              brand: "FLORA SHOP",              name: "Bouquet Personnalisé",              price: "Sur Demande",              rating: 5,
              reviewCount: "300+",              imageSrc:
                "http://img.b2bpic.net/free-photo/flower-composition-bucket-roses-chrysanthemum-side-view_141793-4420.jpg",              imageAlt: "Custom personalized bouquet"
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Ce Que Disent Nos Clients"
          description="Découvrez les avis de nos clients satisfaits et leurs expériences avec FLORA SHOP."
          tag="Témoignages"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Ahmed",              role: "Cliente",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/happy-satisfied-customer-making-ok-gesture_74855-2298.jpg",              imageAlt: "Sarah Ahmed"
            },
            {
              id: "2",              name: "Mohamed Karim",              role: "Client",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",              imageAlt: "Mohamed Karim"
            },
            {
              id: "3",              name: "Fatima Bennani",              role: "Cliente",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-attractive-caucasian-smiling-woman_93675-135471.jpg",              imageAlt: "Fatima Bennani"
            },
            {
              id: "4",              name: "Hassan Tazi",              role: "Client",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              imageAlt: "Hassan Tazi"
            },
            {
              id: "5",              name: "Amina Rabie",              role: "Cliente",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",              imageAlt: "Amina Rabie"
            },
            {
              id: "6",              name: "Ahmed Loukili",              role: "Client",              company: "Marrakech",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",              imageAlt: "Ahmed Loukili"
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Gammes de Livraison"
          description="Choisissez votre option de livraison et recevez vos fleurs à domicile rapidement."
          tag="Tarifs"
          tagIcon={Truck}
          textboxLayout="default"
          useInvertedBackground={true}
          plans={[
            {
              id: "express",              badge: "Livraison Express",              badgeIcon: Zap,
              price: "Gratuit",              subtitle: "Livraison le jour même avant 18h",              buttons: [
                { text: "Commander Maintenant", href: "tel:+212771849782" },
                { text: "Plus d'Infos", href: "https://wa.me/212771849782" },
              ],
              features: [
                "Livraison avant 18h",                "Fleurs fraîches garanties",                "Secteur Marrakech complet",                "Suivi en direct"
              ],
            },
            {
              id: "standard",              badge: "Livraison Standard",              badgeIcon: CheckCircle,
              price: "50 DH",              subtitle: "Livraison flexible en 24-48h",              buttons: [
                { text: "Commander Maintenant", href: "tel:+212771849782" },
                { text: "Plus d'Infos", href: "https://wa.me/212771849782" },
              ],
              features: [
                "Livraison en 24-48h",                "Fleurs premium",                "Toute la région",                "Service personnalisé"
              ],
            },
            {
              id: "luxury",              badge: "Service Premium",              badgeIcon: Crown,
              price: "Sur Demande",              subtitle: "Arrangements personnalisés de luxe",              buttons: [
                {
                  text: "Consulter",                  href: "https://wa.me/212771849782?text=Je%20souhaite%20un%20arrangement%20premium"
                },
                { text: "Appeler", href: "tel:+212771849782" },
              ],
              features: [
                "Designs exclusifs",                "Fleurs rares importées",                "Consultation gratuite",                "Garantie satisfaction 100%"
              ],
            },
          ]}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Prêt à envoyer des fleurs? Contactez FLORA SHOP dès maintenant pour une livraison rapide et élégante à Marrakech."
          animationType="reveal-blur"
          buttons={[
            { text: "📞 Appeler: 0771 849 782", href: "tel:+212771849782" },
            { text: "💬 WhatsApp Direct", href: "https://wa.me/212771849782" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/exotic-rustic-bunch-flowers-mixed-colors_114579-1969.jpg"
          imageAlt="Beautiful flowers background"
          logoText="FLORA SHOP"
          copyrightText="© 2025 FLORA SHOP - Fleuriste Marrakech. Tous droits réservés."
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Accueil", href: "#" },
                { label: "Bouquets", href: "#collections" },
                { label: "À Propos", href: "#features" },
                { label: "Avis", href: "#testimonials" },
              ],
            },
            {
              title: "Contact",              items: [
                {
                  label: "📍 Carrefour Carré Eden, Av. Mohammed V, Marrakech 40000",                  href: "https://maps.google.com/?q=Carrefour+Carré+Eden,+Avenue+Mohammed+V,+Marrakech"
                },
                { label: "📞 0771 849 782", href: "tel:+212771849782" },
                { label: "💬 WhatsApp", href: "https://wa.me/212771849782" },
                { label: "⭐ 4.9/5 - 50+ avis Google", href: "#" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Livraison Express", href: "#pricing" },
                { label: "Bouquets Personnalisés", href: "#collections" },
                { label: "Occasions Spéciales", href: "#collections" },
                { label: "Commander Maintenant", href: "https://wa.me/212771849782" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
