import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Eu nunca vendi nada na internet. Consigo aplicar?',
    answer:
      'Sim — o treinamento foi feito exatamente pra quem está começando do zero absoluto. Tudo é passo a passo: você assiste, aplica e segue pro próximo passo. Não precisa de experiência nenhuma.',
  },
  {
    question: 'Preciso saber programar pra criar um Micro SaaS?',
    answer:
      'Não. Esse é o ponto principal do método: você usa Inteligência Artificial pra criar sua plataforma sem escrever uma linha de código. E se não quiser criar nada agora, você pode se afiliar aos produtos prontos e validados que entregamos na lista.',
  },
  {
    question: 'Preciso investir muito dinheiro pra começar?',
    answer:
      'Não. Você só precisa de um computador ou celular com internet. O treinamento custa R$19,90 (pagamento único) e o método foi desenhado pra você começar sem gastar com anúncios ou ferramentas caras.',
  },
  {
    question: 'Não tenho tempo. Quanto tempo preciso por dia?',
    answer:
      'O método foi feito pra caber na rotina de quem trabalha. As aulas são diretas ao ponto, e a primeira missão — sua primeira venda — foi desenhada pra acontecer em até 24 horas de aplicação.',
  },
  {
    question: 'Como funciona a garantia de 24 horas?',
    answer:
      'Simples: se você não fizer sua primeira venda em 24 horas, pode pedir o estorno dos R$19,90. E se você provar que aplicou o método passo a passo e mesmo assim não vendeu, pode solicitar R$100 diretamente no seu Pix.',
  },
  {
    question: 'Recebo acesso na hora?',
    answer:
      'Sim. Assim que o pagamento é confirmado, você recebe o acesso à área de membros no seu e-mail e já pode começar imediatamente, inclusive fazer sua primeira venda ainda hoje.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Funciona. Você pode assistir às aulas e aplicar o método 100% pelo celular. O computador ajuda, mas não é obrigatório.',
  },
  {
    question: 'Por que tão barato? Qual é a pegadinha?',
    answer:
      'Nenhuma. O Caio quer colocar o máximo de pessoas aplicando o Método P24 e gerando resultados, porque são esses resultados que comprovam a força do modelo. Por isso o preço simbólico de R$19,90.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:py-24">
      <h2 className="mb-10 text-center font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
        Perguntas Frequentes — <span className="text-gradient-blue">FAQ</span>
      </h2>

      <div className="flex flex-col gap-2.5">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#101010] transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-[#161616] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#127DFF] sm:px-6 cursor-pointer"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 transition-transform duration-200 ${
                    isOpen
                      ? 'rotate-90 border-white text-white'
                      : 'border-[#BDBDBD] text-[#BDBDBD]'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-display text-base font-normal leading-snug text-white sm:text-lg">
                  {item.question}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-white/5 bg-black px-5 pb-6 pt-4 sm:pl-16 sm:pr-8">
                  <p className="font-sans text-sm leading-relaxed text-[#A1A1A8] sm:text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
