/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Activity,
  HardDrive,
  BarChart3,
  Users,
  Calendar,
  Lock,
  Headset
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const WHATSAPP_LINK = "https://wa.me/5541996088796?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20Twins%20ERP.";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Twins<span className="text-blue-600">ERP</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#solucoes" className="hover:text-blue-600 transition-colors">Soluções</a>
            <a href="#fiscal" className="hover:text-blue-600 transition-colors">Módulos Fiscais</a>
            <a href="#por-que-twins" className="hover:text-blue-600 transition-colors">Por que Twins?</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Agendar Demonstração
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl"
          >
            <a href="#solucoes" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Soluções</a>
            <a href="#fiscal" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Módulos Fiscais</a>
            <a href="#por-que-twins" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Por que Twins?</a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-center"
            >
              Agendar Demonstração
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              ERP Desktop de Nova Geração
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              O Twins ERP é a outra <span className="text-blue-600">metade</span> que faltava para a sua gestão.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Simplifique a emissão de NFe, controle seu estoque em tempo real e gerencie o financeiro com a velocidade do Python e a estabilidade de um sistema Desktop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200"
              >
                Agendar Demonstração <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#fiscal"
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Conhecer Módulos
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-teal-400/20 blur-3xl rounded-full" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest pl-4">Twins ERP Dashboard - v2.4.0</div>
              </div>
              <img 
                src="https://picsum.photos/seed/software/1200/800" 
                alt="Twins ERP Software Interface" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Float Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400">NFe Emitida</div>
                  <div className="text-sm font-bold text-slate-900">Em 1.2 segundos</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Empresas que confiam na sincronia do Twins</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {['Lojas de Varejo', 'Oficinas', 'Distribuidores', 'Mercados', 'Serviços'].map((item) => (
            <span key={item} className="text-xl font-bold flex items-center gap-2">
              <Activity className="w-5 h-5" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PainPoints = () => {
  const points = [
    {
      title: "Lentidão nas NFe",
      description: "Sistemas web travam justamente quando a fila aumenta. O Twins é nativo e emite notas em segundos.",
      icon: <Clock className="w-8 h-8 text-red-500" />
    },
    {
      title: "Estoque Furado",
      description: "Perda de vendas por falta de produto? Controle real de entradas e saídas sem erros manuais.",
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Burocracia Trancada",
      description: "Chega de planilhas complexas. Gestão financeira que você entende e que funciona no seu ritmo.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">O fim da dor de cabeça na gestão</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Resolvemos os problemas reais que impedem sua empresa de crescer.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group"
          >
            <div className="mb-6">{point.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
            <p className="text-slate-600 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Poder Desktop, Agilidade Python",
      description: "Esqueça a internet instável. O Twins funciona localmente com a robustez que seu negócio exige. O motor em Python garante processamento ultrarrápido de dados.",
      icon: <HardDrive className="w-6 h-6" />,
      badges: ["Offline-Ready", "Zero Latência"]
    },
    {
      title: "Controle Financeiro Blindado",
      description: "Seus dados fiscais e sensíveis ficam no seu computador, não em uma nuvem de terceiros. Privacidade total com backups automáticos configuráveis.",
      icon: <Lock className="w-6 h-6" />,
      badges: ["Privacidade", "Segurança Local"]
    },
    {
      title: "Escalabilidade Sem Atrito",
      description: "Instalou, configurou, emitiu. Sem necessidade de servidores complexos ou setups demorados. Ideal para quem não tem tempo a perder.",
      icon: <Zap className="w-6 h-6" />,
      badges: ["Instant Setup", "UX Intuitiva"]
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Tecnologia que <span className="text-blue-500">trabalha por você</span>.</h2>
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-400 mb-4">{feature.description}</p>
                    <div className="flex gap-2">
                      {feature.badges.map(b => (
                        <span key={b} className="text-[10px] px-2 py-0.5 border border-slate-700 rounded-full text-slate-500 font-bold uppercase tracking-wider">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-600/20 absolute -inset-10 blur-3xl rounded-full" />
            <img 
              src="https://picsum.photos/seed/tech/800/800" 
              alt="Technology" 
              className="relative w-full rounded-3xl shadow-2xl border border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedFiscalFeatures = () => {
  const modules = [
    {
      title: "NF-e & NFC-e",
      items: [
        "Consultar Status do Serviço",
        "Consultar Cadastro e Notas",
        "Consultar Protocolo",
        "Emissão Completa NF-e e NFC-e",
        "Cancelamento e Inutilização",
        "Carta de Correção Eletrônica",
        "Manifestação do Destinatário",
        "Distribuição DF-e por NSU",
        "Emissão em Contingência",
        "Impressão de DANFE e DANFCE"
      ],
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "MDF-e (Transporte)",
      items: [
        "Consultar Status do Serviço",
        "Consulta pela Chave de Acesso",
        "Gerenciar MDF-es não encerrados",
        "Emissão e Consultar Recibo",
        "Gestão de Eventos (Cancelamento)",
        "Impressão de DAMDFE"
      ],
      icon: <Activity className="w-6 h-6 text-green-600" />
    },
    {
      title: "NFS-e (Serviços)",
      items: [
        "Consultar NFS-e e Rps",
        "Consultar Lote de Imposto",
        "Emissão de Notas de Serviço",
        "Cancelamento de NFS-e"
      ],
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />
    },
    {
      title: "CT-e & Mais",
      items: [
        "Fluxo da Consulta de Distribuição (NSU)",
        "Sincronização Fiscal em Tempo Real",
        "Relatórios Fiscais Customizados"
      ],
      icon: <Zap className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <section id="fiscal" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">O motor fiscal mais potente da categoria</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tudo o que sua empresa precisa para estar 100% em dia com a SEFAZ, sem travar sua operação.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, mIdx) => (
            <motion.div 
              key={mIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: mIdx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white transition-all overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                {module.title}
              </h3>
              <ul className="space-y-3">
                {module.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex gap-2 text-sm text-slate-600 leading-tight">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyTwins = () => {
  return (
    <section id="por-que-twins" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-32" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Por que Twins?</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 italic">
              "No mundo dos negócios, você não pode estar sozinho. O Twins foi criado com o conceito de 'gêmeos': um sistema que é o espelho da sua eficiência. Quando você age, o Twins responde em sincronia perfeita."
            </p>
            <div className="space-y-4">
              {[
                "Sincronia total entre estoque e vendas",
                "Agilidade de gêmeos: o braço direito do empreendedor",
                "Focado no crescimento, não na burocracia"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso de internet para emitir NFe no Twins?",
      a: "O Twins é um sistema Desktop e gerencia todo o seu estoque e financeiro offline. Para a emissão da NFe, é necessária uma conexão momentânea para comunicação com a SEFAZ, mas o processo é otimizado para funcionar mesmo em conexões lentas."
    },
    {
      q: "O sistema é difícil de instalar?",
      a: "Não! Seguimos a filosofia 'Instalou, Usou'. O Twins vem em um pacote leve que não exige configuração de servidores complexos ou bancos de dados externos pesados."
    },
    {
      q: "Como funciona o suporte técnico?",
      a: "Oferecemos suporte prioritário via WhatsApp e Acesso Remoto. Nosso foco é resolver qualquer dúvida em tempo recorde para não parar sua operação."
    },
    {
      q: "Meus dados estão seguros?",
      a: "Sim. Diferente de sistemas 100% web, o Twins armazena os dados localmente no seu computador. Você tem total controle sobre sua base de dados e backups."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Twins<span className="text-blue-600">ERP</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              O braço direito do empreendedor moderno. Velocidade, estabilidade e simplicidade em um único sistema desktop.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Activity className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Página Inicial</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#por-que-twins" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contatos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-blue-600">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Twins ERP. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Dados Criptografados
            </div>
            <div className="flex items-center gap-2">
              <Headset className="w-4 h-4" /> Suporte 24/7
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-6xl font-bold mb-8">Pronto para dar a outra metade <br className="hidden md:block" /> da gestão para sua empresa?</h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Fale agora com nosso time pelo WhatsApp e agende uma demonstração gratuita em minutos.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            Agendar via WhatsApp <Activity className="w-6 h-6" />
          </a>
          <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noreferrer"
             className="bg-blue-700/50 backdrop-blur-sm text-white border-2 border-blue-400/30 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-700/80 transition-all flex items-center justify-center gap-2"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Features />
        <DetailedFiscalFeatures />
        <WhyTwins />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
