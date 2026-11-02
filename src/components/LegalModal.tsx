import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeModal,
  onClose,
}) => {
  useEffect(() => {
    if (!activeModal) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const isPrivacy = activeModal === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0A0D12] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2
            id="legal-modal-title"
            className="font-display text-lg font-bold text-white sm:text-xl"
          >
            {isPrivacy ? 'Políticas de Privacidade' : 'Termos de Uso'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-white/25 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-6 font-sans text-sm leading-relaxed text-neutral-300 space-y-4">
          {isPrivacy ? (
            <>
              <p>
                A <strong>MULTIUM CURSOS ONLINE LTDA</strong>, inscrita no CNPJ
                sob o nº <strong>43.695.282/0001-00</strong>, responsável pelo
                treinamento <strong>Primeira Assinatura em 24H (Método P24)</strong>,
                valoriza a privacidade de seus usuários e alunos, atuando em
                conformidade com a Lei Geral de Proteção de Dados (Lei nº
                13.709/2018 – LGPD).
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                1. Coleta e Uso de Informações
              </h3>
              <p>
                Coletamos apenas os dados estritamente necessários para processar
                sua inscrição, liberar seu acesso imediato à área de membros e
                prestar suporte ao aluno (como nome, e-mail, telefone/WhatsApp e
                dados transacionais processados de forma criptografada pela
                plataforma Cakto).
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                2. Parâmetros de Navegação e Cookies
              </h3>
              <p>
                Utilizamos cookies e parâmetros de origem (como UTMs) para
                mensurar o desempenho das campanhas publicitárias e aprimorar a
                experiência de navegação, sem comercializar dados pessoais com
                terceiros.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                3. Segurança do Pagamento
              </h3>
              <p>
                Todas as transações financeiras são realizadas em ambiente seguro
                com criptografia de ponta a ponta através da plataforma oficial de
                checkout Cakto. Dados sensíveis de cartão de crédito não ficam
                armazenados em nossos servidores.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                4. Direitos do Titular
              </h3>
              <p>
                A qualquer momento, você pode solicitar confirmação de
                tratamento, atualização cadastral ou exclusão de dados pessoais
                por meio dos canais oficiais de suporte disponibilizados dentro
                da plataforma de alunos.
              </p>
            </>
          ) : (
            <>
              <p>
                Estes Termos de Uso regulam o acesso e a utilização do programa
                educacional <strong>Primeira Assinatura em 24H (Método P24)</strong>,
                comercializado por <strong>MULTIUM CURSOS ONLINE LTDA – CNPJ 43.695.282/0001-00</strong>.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                1. Objeto e Acesso ao Treinamento
              </h3>
              <p>
                Após a confirmação do pagamento único na plataforma Cakto, o
                aluno recebe acesso individual e intransferível à área de membros
                contendo os módulos em vídeo e materiais complementares do Método
                P24.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                2. Propriedade Intelectual
              </h3>
              <p>
                Todo o conteúdo disponibilizado (aulas, estruturas, templates,
                materiais e marcas) é de titularidade exclusiva da MULTIUM CURSOS
                ONLINE LTDA, sendo vedada a reprodução, revenda não autorizada,
                compartilhamento de senhas ou distribuição pública.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                3. Garantia e Condições de Reembolso
              </h3>
              <p>
                O aluno dispõe da garantia legal incondicional prevista no Código
                de Defesa do Consumidor, além da garantia condicional divulgada
                nesta página: caso não realize sua primeira venda em 24 horas,
                poderá solicitar o estorno integral de 100% do valor investido
                (R$19,90). Para a solicitação do valor adicional de R$100 via
                Pix, é indispensável a comprovação integral e documentada da
                aplicação prática de todas as etapas ensinadas no Método P24
                dentro do prazo estabelecido nos regulamentos internos da área de
                membros.
              </p>
              <h3 className="font-display text-base font-semibold text-white pt-2">
                4. Isenção de Promessa de Ganhos Automáticos
              </h3>
              <p>
                Os resultados apresentados nesta página são reais e pertencem a
                alunos que aplicaram o método, porém resultados financeiros
                variam conforme a dedicação, consistência e execução individual
                de cada participante.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-white/10 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#127DFF] px-5 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-[#0f68d6] cursor-pointer whitespace-nowrap"
          >
            Entendi e fechar
          </button>
        </div>
      </div>
    </div>
  );
};
