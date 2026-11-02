/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useCheckoutUrl } from './utils/checkout';
import { CtaButton } from './components/CtaButton';
import { ResilientImage } from './components/ResilientImage';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { WhatsappLightboxGrid } from './components/WhatsappLightboxGrid';
import { FaqSection } from './components/FaqSection';
import { LegalModal, LegalModalType } from './components/LegalModal';

const HERO_DESKTOP_BG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/fundocaiooo-OKDALw7he1ZlbdKx.webp';
const HERO_MOBILE_BG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/mobileofc-Llpk9qUr14Yjoqn7.png';
const LOGO_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=174,fit=crop/GUu7OKqV6JR8z9he/logo-assinatura-4XovqeUf2YkpKFGU.png';
const CHECK_SVG =
  'https://assets.zyrosite.com/GUu7OKqV6JR8z9he/check-YbWHCoJx3KM4AWoq.svg';
const APP_MOCKUP_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/GUu7OKqV6JR8z9he/mockupcell-6aQNWFhe5WQOOait.png';
const MEMBERS_AREA_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=840,fit=crop/GUu7OKqV6JR8z9he/areademembros-4JNAfLaF0LoVBgYd.png';
const LOCK_3D_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/GUu7OKqV6JR8z9he/cadeado-v5qXIwtkNpiE3x7U.png';
const BLUE_BANNER_BG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/backazul-TUFnUorRGOYzcjtX.png';
const OFFER_CARD_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1336,fit=crop/GUu7OKqV6JR8z9he/semcompra-TLpHPPL8dcJEBIGr.png';
const CAIO_PHOTO_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=864,fit=crop/GUu7OKqV6JR8z9he/caiooo-1SGIyKhhUefVLdR7.png';

const MODULE_CARDS = [
  {
    title: 'Módulo 1 — Mentalidade e Visão do Mercado de Assinaturas',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/GUu7OKqV6JR8z9he/carddd111-76kI9rgmUqQtOOJ4.webp',
  },
  {
    title: 'Módulo 2 — Estrutura Pronta e Produtos Validados',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/GUu7OKqV6JR8z9he/carddd222-kNo9DLETTefjqCVo.png',
  },
  {
    title: 'Módulo 3 — Execução P24: Primeira Assinatura em 24h',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/GUu7OKqV6JR8z9he/carddd333-rpTYnAqCZ8ZtHv7B.png',
  },
  {
    title: 'Módulo 4 — Escala e Recorrência Automática',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/GUu7OKqV6JR8z9he/card442-5FlSBVqPmfsQQaKB.png',
  },
];

const HERO_BADGES = [
  'Acesso imediato',
  'Apenas R$19,90',
  'Garantia: primeira venda em 24h ou R$100 no seu Pix',
];

export default function App() {
  const checkoutUrl = useCheckoutUrl();
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* =========================================================
            1. HERO SECTION
           ========================================================= */}
        <section className="relative overflow-hidden bg-black">
          {/* Desktop Background */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <ResilientImage
              src={HERO_DESKTOP_BG}
              alt=""
              loading="eager"
              className="h-full w-full object-cover object-right-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Mobile Background */}
          <div className="pointer-events-none absolute inset-x-0 top-0 block md:hidden">
            <ResilientImage
              src={HERO_MOBILE_BG}
              alt=""
              loading="eager"
              className="h-auto w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-[280px] sm:pt-[360px] md:px-8 md:py-24 lg:py-28">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
              {/* Logotipo */}
              <ResilientImage
                src={LOGO_IMG}
                alt="Primeira Assinatura em 24H — Método P24"
                loading="eager"
                className="mb-6 h-10 w-auto sm:h-12 md:h-13"
              />

              {/* Headline Principal */}
              <h1 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
                Faça sua{' '}
                <span className="text-gradient-blue">
                  PRIMEIRA VENDA DE ASSINATURA
                </span>{' '}
                em 24 horas... ou eu coloco{' '}
                <span className="underline decoration-[#127DFF] decoration-[3px] underline-offset-[6px]">
                  R$100 no seu Pix.
                </span>
              </h1>

              {/* Texto de Apoio Obrigatório */}
              <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-[#D8D8DF] sm:text-lg">
                Mesmo que você esteja começando do absoluto zero, sem saber
                programar e sem nunca ter vendido nada na internet. Você só
                precisa de um celular ou computador, o resto a gente te entrega
                pronto, no passo a passo.
              </p>

              {/* Botão 3D Verde */}
              <div className="mt-8 w-full flex justify-center md:justify-start">
                <CtaButton
                  href={checkoutUrl}
                  ariaLabel="Quero fazer minha primeira assinatura em 24h por apenas R$19,90"
                />
              </div>

              {/* Badges com Ícone de Verificação Verde */}
              <ul className="mt-7 flex flex-col items-center gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:gap-x-6 md:gap-y-3">
                {HERO_BADGES.map((badgeText) => (
                  <li
                    key={badgeText}
                    className="flex items-center gap-2.5 text-left"
                  >
                    <img
                      src={CHECK_SVG}
                      alt=""
                      aria-hidden="true"
                      referrerPolicy="no-referrer"
                      className="h-5 w-5 shrink-0"
                    />
                    <span className="font-display text-xs font-normal text-[#FFFEFE] sm:text-sm">
                      {badgeText}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Subtle Hairline Divider */}
        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-[#127DFF]/30 to-transparent" />

        {/* =========================================================
            2. MOCKUP DO APLICATIVO + POR QUE ASSINATURAS
           ========================================================= */}
        <section className="relative overflow-hidden bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-[#92C3FF]">
                O modelo da recorrência
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">
                  Vender assinatura é o melhor
                </span>{' '}
                modelo de negócio do digital. E é simples entender o porquê:
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
                <strong className="font-semibold text-white">
                  Fez R$5.000 em assinaturas esse mês?
                </strong>{' '}
                Mês que vem{' '}
                <span className="text-gradient-blue font-medium">
                  esses R$5.000 caem de novo.
                </span>{' '}
                E tudo que você vender agora só vai SOMANDO em cima.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Central / Perspective App Mockup with Subtle Glow */}
              <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center lg:col-span-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-tr from-[#127DFF]/25 via-emerald-500/15 to-transparent blur-3xl"
                />
                <ResilientImage
                  src={APP_MOCKUP_IMG}
                  alt="Mockup do aplicativo com notificações de vendas de assinaturas"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(18,125,255,0.22)]"
                />
              </div>

              {/* 3 Pilares Oficiais do Método P24 */}
              <div className="lg:col-span-6">
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-sm font-semibold text-[#2d7df7] tabular-nums">
                      01.
                    </span>
                    <p className="font-sans text-base leading-relaxed text-[#D8D8D8] sm:text-lg">
                      <strong className="font-display font-semibold text-white">
                        Liberdade financeira.
                      </strong>{' '}
                      Trabalhar de onde quiser: de casa, de um café, de outra
                      cidade, de outro país.{' '}
                      <span className="text-[#4D94FF]">
                        Sem chefe, sem horário fixo,
                      </span>{' '}
                      sem teto de quanto você pode ganhar.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-sm font-semibold text-[#2d7df7] tabular-nums">
                      02.
                    </span>
                    <p className="font-sans text-base leading-relaxed text-[#D8D8D8] sm:text-lg">
                      <strong className="font-display font-semibold text-white">
                        E o melhor:
                      </strong>{' '}
                      você não precisa de escritório, funcionário ou dinheiro
                      pra investir em estoque.{' '}
                      <span className="text-[#4D94FF]">
                        Você só precisa de um computador ou de um celular para
                        começar.
                      </span>
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-sm font-semibold text-[#2d7df7] tabular-nums">
                      03.
                    </span>
                    <p className="font-sans text-base leading-relaxed text-[#D8D8D8] sm:text-lg">
                      <strong className="font-display font-semibold text-white">
                        Mesmo sem conhecimento NENHUM.
                      </strong>{' '}
                      Dentro do treinamento a gente te entrega o mapa completo,{' '}
                      <span className="text-[#4D94FF]">
                        passo a passo, usando o nosso Método P24.
                      </span>{' '}
                      Você só precisa seguir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =========================================================
            3. CARROSSEL INTERATIVO DE DEPOIMENTOS
           ========================================================= */}
        <section className="bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-[#92C3FF]">
                Depoimentos de alunos
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">Isso não é teoria.</span>{' '}
                Olha o que está acontecendo na prática:
              </h2>
            </div>

            <TestimonialsCarousel />

            {/* Botão CTA logo abaixo do carrossel */}
            <div className="mt-10 flex justify-center">
              <CtaButton
                href={checkoutUrl}
                ariaLabel="Quero ter esses resultados com o Método P24"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =========================================================
            4. MURAL DE PRINTS DO WHATSAPP (RESULTADOS REAIS)
           ========================================================= */}
        <section className="bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-emerald-400">
                Notificações reais na Cakto · Clique para ampliar
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">Pessoas comuns</span>{' '}
                faturando as primeiras assinaturas
              </h2>
            </div>

            <WhatsappLightboxGrid />

            {/* Botão CTA logo abaixo */}
            <div className="mt-12 flex justify-center">
              <CtaButton
                href={checkoutUrl}
                ariaLabel="Quero destravar minha primeira assinatura em 24h"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-[#127DFF]/25 to-transparent" />

        {/* =========================================================
            5. ÁREA DE MEMBROS
           ========================================================= */}
        <section className="relative overflow-hidden bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-[#92C3FF]">
                Plataforma exclusiva de alunos
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">Área de membros</span> com
                aulas em máxima qualidade
              </h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-b from-[#127DFF]/15 via-transparent to-transparent blur-2xl"
              />
              <ResilientImage
                src={MEMBERS_AREA_IMG}
                alt="Mockup da área de membros oficial do Método P24"
                className="relative z-10 h-auto w-full rounded-2xl border border-white/10 object-contain"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            6. OS 4 MÓDULOS DO MÉTODO
           ========================================================= */}
        <section className="bg-black px-5 pb-20 pt-8 sm:pb-28 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-[#92C3FF]">
                Passo a passo completo
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">O mapa completo,</span>{' '}
                passo a passo, do zero até sua primeira venda de assinatura:
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
              {MODULE_CARDS.map((mod) => (
                <div
                  key={mod.src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#070B12] transition-transform duration-200 hover:-translate-y-1 hover:border-[#127DFF]/40"
                >
                  <ResilientImage
                    src={mod.src}
                    alt={mod.title}
                    fallbackLabel={mod.title}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Botão CTA logo abaixo */}
            <div className="mt-12 flex justify-center">
              <CtaButton
                href={checkoutUrl}
                ariaLabel="Quero acesso imediato aos 4 módulos do Método P24"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =========================================================
            7. GARANTIA BLINDADA
           ========================================================= */}
        <section className="relative overflow-hidden bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            {/* Ícone 3D de Cadeado Dourado Flutuante */}
            <div className="relative mx-auto flex w-56 items-center justify-center sm:w-72 md:col-span-5 md:w-full max-w-[320px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 rounded-full bg-amber-400/15 blur-3xl"
              />
              <ResilientImage
                src={LOCK_3D_IMG}
                alt="Cadeado dourado 3D — Garantia Blindada de 24h"
                className="relative z-10 h-auto w-full object-contain animate-float-lock"
              />
            </div>

            {/* Texto da Garantia Blindada */}
            <div className="text-center md:col-span-7 md:text-left">
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                <span className="text-gradient-blue">O risco é todo meu:</span>{' '}
                ou você vende em 24h, ou você recebe.
              </h2>

              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-[#D8D8DF] sm:text-lg">
                <p className="font-semibold text-white">
                  Eu confio tanto no Método que eu faço um acordo com você:
                </p>
                <p>
                  Se você não fizer sua primeira venda em 24h, você pode pedir o
                  estorno. Devolvo 100% dos seus R$19,90, sem perguntas.
                </p>
                <p>
                  E mais: se você provar que aplicou o método passo a passo e
                  mesmo assim não vendeu,{' '}
                  <strong className="font-semibold text-emerald-400">
                    você pode solicitar R$100 direto no seu Pix.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            8. FAIXA DE REVERSÃO DE RISCO
           ========================================================= */}
        <section className="relative overflow-hidden py-9 sm:py-12">
          <div className="pointer-events-none absolute inset-0">
            <ResilientImage
              src={BLUE_BANNER_BG}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#06285E]/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
            <p className="font-display text-lg font-semibold leading-snug text-white sm:text-2xl">
              Ou seja: na pior das hipóteses, você sai no lucro. Esse é o
              tamanho da confiança que eu tenho na metodologia.
            </p>
          </div>
        </section>

        {/* =========================================================
            9. BOX DE OFERTA FINAL
           ========================================================= */}
        <section
          id="oferta"
          className="relative overflow-hidden bg-black px-5 py-20 sm:py-28 md:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-display text-xs font-medium tracking-wide text-emerald-400">
              Garanta sua vaga agora
            </p>
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold leading-[1.15] sm:text-4xl">
              <span className="text-gradient-blue">
                Sua grande chance de começar no marketing digital custa menos
                que uma pizza:
              </span>
            </h2>

            {/* Card Completo de Resumo + Botão Grande de Compra Verde */}
            <div className="relative mx-auto mt-10 flex max-w-[440px] flex-col items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-b from-[#127DFF]/20 via-emerald-500/15 to-transparent blur-3xl"
              />

              <div className="relative z-10 w-full overflow-hidden rounded-3xl">
                <ResilientImage
                  src={OFFER_CARD_IMG}
                  alt="Resumo completo da oferta Primeira Assinatura em 24h por apenas R$19,90"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="relative z-20 -mt-6 w-full px-3 sm:-mt-8">
                <CtaButton
                  href={checkoutUrl}
                  variant="offer"
                  className="w-full"
                  ariaLabel="Comprar agora Primeira Assinatura em 24h por R$19,90"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =========================================================
            10. SOBRE CAIO MARTINS
           ========================================================= */}
        <section className="relative overflow-hidden bg-black px-5 py-16 sm:py-24 md:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Foto do Autor */}
            <div className="mx-auto w-full max-w-[420px] lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070B12]">
                <ResilientImage
                  src={CAIO_PHOTO_IMG}
                  alt="Caio Martins — CEO e fundador da Cakto"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Bio & CTA */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <p className="mb-3 font-display text-xs font-medium tracking-wide text-[#92C3FF]">
                Seu mentor nessa jornada
              </p>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-4xl">
                Quem vai te guiar nessa jornada:{' '}
                <span className="text-gradient-blue">Caio Martins</span>
              </h2>

              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-[#D4D4DB] sm:text-lg">
                <p>
                  <strong className="font-semibold text-white">
                    Caio Martins já faturou mais de R$15 milhões no digital.
                  </strong>{' '}
                  Ele é CEO e fundador da Cakto, uma das maiores plataformas de
                  pagamentos do Brasil — a mesma plataforma que processa milhões
                  em vendas de milhares de produtores todos os meses.
                </p>
                <p>
                  Ou seja: o Caio não é só alguém que ensina. Ele vive o mercado
                  digital por dentro, todos os dias, e vê em tempo real o que
                  está vendendo AGORA no Brasil.
                </p>
                <p className="text-white font-medium">
                  É exatamente esse conhecimento que ele colocou dentro do
                  Método P24 — pra você não precisar descobrir nada sozinho.
                </p>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <CtaButton
                  href={checkoutUrl}
                  ariaLabel="Quero aprender o Método P24 com Caio Martins"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =========================================================
            FAQ OFICIAL (PERGUNTAS FREQUENTES)
           ========================================================= */}
        <FaqSection />
      </main>

      {/* =========================================================
          11. RODAPÉ INSTITUCIONAL
         ========================================================= */}
      <footer className="border-t border-white/10 bg-black px-5 py-12 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
          <div className="space-y-1.5">
            <p className="font-display text-xs font-medium tracking-wide text-neutral-300 sm:text-sm">
              MULTIUM CURSOS ONLINE LTDA – 43.695.282/0001-00
            </p>
            <p className="font-sans text-xs text-neutral-400 sm:text-sm">
              © 2026 Primeira Assinatura em 24H. Todos os direitos reservados.
            </p>
          </div>

          {/* Links para Modais Funcionais */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400 sm:text-sm">
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacy')}
              className="underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] rounded px-1 py-0.5 cursor-pointer whitespace-nowrap"
            >
              Políticas de Privacidade
            </button>
            <span aria-hidden="true" className="text-neutral-600">
              ·
            </span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('terms')}
              className="underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] rounded px-1 py-0.5 cursor-pointer whitespace-nowrap"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </footer>

      {/* Modais Institucionais */}
      <LegalModal
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
