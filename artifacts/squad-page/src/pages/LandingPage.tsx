import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  Heart, 
  BookOpen, 
  Star, 
  Users, 
  CalendarDays,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

// The single unified CTA component used throughout the page
const HotmartCTA = ({ children = "Quero fazer parte agora", className }: { children?: React.ReactNode, className?: string }) => (
  <Button asChild size="lg" className={`
    px-8 py-7 sm:px-12 text-lg sm:text-xl font-bold uppercase tracking-wider 
    bg-gradient-to-r from-accent via-yellow-600 to-accent bg-[length:200%_auto]
    hover:bg-[position:right_center] text-white border-none
    shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] hover:shadow-[0_0_60px_-15px_rgba(234,179,8,0.7)]
    hover:scale-105 hover:-translate-y-1 transition-all duration-500 rounded-xl
    ${className || ""}
  `}>
    <a href="https://pay.hotmart.com/N102229663J" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">

      {/* == STICKY NAV == */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <img
            src={`${import.meta.env.BASE_URL}images/kor-logo-branca.png`}
            alt="KÖR – Escola de Negócios e Família"
            className="h-10 w-auto"
          />
          <a
            href="https://pay.hotmart.com/N102229663J"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-lg bg-accent text-zinc-950 font-bold text-sm uppercase tracking-wide hover:bg-yellow-400 transition-colors"
          >
            Quero fazer parte
          </a>
        </div>
      </header>

      {/* == SECTION 1: HERO == */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950">
          <img
            src="https://sejatriade.com.br/wp-content/uploads/2025/10/6-e1760103316660-1024x834.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <img
              src={`${import.meta.env.BASE_URL}images/kor-logo-branca.png`}
              alt="KÖR – Escola de Negócios e Família"
              className="h-16 sm:h-20 w-auto mx-auto mb-6 opacity-90"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-block py-1 px-4 mb-6 rounded-full bg-accent/20 border border-accent/40 text-accent font-medium text-sm tracking-widest uppercase">
              Comunidade Squad
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Chegou a sua vez de crescer nos negócios, fortalecer sua família e avançar na fé
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Esse é o seu momento de transformação e alinhamento de propósito.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 2: VIDEO MANIFESTO == */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              ASSISTA AO MANIFESTO DA COMUNIDADE SQUAD
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              Sinta a força da transformação que mulheres empresárias estão vivendo através da KÖR – escola de negócios e família.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative mx-auto max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-zinc-800 group cursor-pointer">
            <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center transition-all duration-500 group-hover:bg-zinc-900/60">
              {/* placeholder pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-zinc-900 to-zinc-900"></div>
              <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-zinc-950 ml-1" fill="currentColor" />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-16">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 3: O QUE É == */}
      <section className="py-24 px-6 bg-background relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-foreground">
              O que é a Comunidade SQUAD?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              A Comunidade SQUAD é um programa com acesso anual da KÖR que une tracionamento de negócios, fortalecimento da família e crescimento da fé a partir de princípios bíblicos.
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              Um espaço para mulheres empresárias viverem transformação completa em todas as áreas da vida.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 4: O QUE VOCÊ VAI RECEBER == */}
      <section className="py-24 px-6 bg-secondary/50 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
              O que você vai receber?
            </h2>
            <p className="text-lg text-muted-foreground">
              Um espaço de ensino, troca e transformação que conecta fé, gestão e família.
            </p>
          </FadeIn>

          {(() => {
            const items = [
              { text: "Educação em gestão e negócios para desenvolver maturidade gerencial", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/1-1.png" },
              { text: "Conteúdos sobre família estruturada que vive os princípios bíblicos", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/2-1.png" },
              { text: "Formação espiritual para alinhar decisões e propósito", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/3-1.png" },
              { text: "Conexão com outras empresárias que trilham o mesmo caminho", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/4-1.png" },
              { text: "Protocolos de desenvolvimento para equilibrar fé, família e negócios com excelência", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/5-1.png" },
            ];
            const BenefitCard = ({ item }: { item: typeof items[0] }) => (
              <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-all duration-300">
                    <img src={item.img} alt="" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-lg font-medium text-foreground leading-snug">{item.text}</p>
                </CardContent>
              </Card>
            );
            return (
              <div className="space-y-6 mb-16">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {items.slice(0, 3).map((item, idx) => (
                    <StaggerItem key={idx}><BenefitCard item={item} /></StaggerItem>
                  ))}
                </StaggerContainer>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[66%] md:mx-auto">
                  {items.slice(3).map((item, idx) => (
                    <StaggerItem key={idx}><BenefitCard item={item} /></StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            );
          })()}

          <FadeIn className="text-center">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 5: MÉTODO SQUAD - 3 PILARES == */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Método SQUAD
            </h2>
            <p className="text-xl text-zinc-300">
              Os 3 pilares fundamentais para uma transformação completa na vida da mulher empresária:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                img: "https://sejatriade.com.br/wp-content/uploads/2025/10/assets_task_01k750e76wfyfvnzyf5v71x0e5_1760031127_img_0-1024x683.webp",
                title: "Pilar 1: Negócios",
                items: ["Estratégias de tracionamento", "Maturidade gerencial", "Ferramentas de liderança"],
                delay: 0.1,
              },
              {
                img: "https://sejatriade.com.br/wp-content/uploads/2025/10/jessica-rockowitz-_U_M_S-G5zE-unsplash-min-1024x683.jpg",
                title: "Pilar 2: Família",
                items: ["Estrutura baseada em princípios bíblicos", "Comunicação e relacionamento saudável", "Construção de legado para as próximas gerações"],
                delay: 0.3,
              },
              {
                img: "https://sejatriade.com.br/wp-content/uploads/2025/10/joel-muniz-XqXJJhK-c08-unsplash-min-1024x683.jpg",
                title: "Pilar 3: Fé",
                items: ["Estudo da Palavra aplicado à vida real", "Desenvolvimento espiritual e propósito", "Comunidade de mulheres que avançam juntas"],
                delay: 0.5,
              },
            ].map((pilar, i) => (
              <FadeIn key={i} delay={pilar.delay} direction="up" className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-48 overflow-hidden">
                  <img src={pilar.img} alt={pilar.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-6 text-white border-b border-zinc-800 pb-4">{pilar.title}</h3>
                  <ul className="space-y-4">
                    {pilar.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="text-center bg-zinc-900/50 p-8 rounded-2xl border border-primary/20 mb-12">
            <p className="text-xl md:text-2xl font-display text-zinc-200">
              Você passará por 3 fases de desenvolvimento para alinhar fé, família e negócios, vivendo o chamado de Deus com excelência.
            </p>
          </FadeIn>

          <FadeIn delay={0.7} className="text-center">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 6: COMO FUNCIONA == */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary">
              Método SQUAD
            </h2>
            <p className="text-xl text-foreground font-medium mb-8">
              O caminho para alinhar negócios, família e fé em uma jornada de crescimento contínuo.
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Como funciona:</h3>
            <p className="text-lg text-muted-foreground">
              A cada mês, um tema central é trabalhado de forma progressiva, com foco em negócios, família e fé:
            </p>
          </FadeIn>

          <div className="space-y-6 mb-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              "Semana 1 – Negócios: aprendizado estratégico e prático para tracionar seu negócio.",
              "Semana 2 – Família: conteúdos para estruturar sua família e fortalecer relacionamentos.",
              "Semana 3 – Fé: desenvolvimento espiritual e maturidade bíblica, aplicando princípios à vida real.",
              "Semana 4 – Integração: unimos tudo que foi aprendido nas três semanas, aplicando o tema de forma prática e completa."
            ].map((text, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-card border border-border shadow-sm group-hover:border-primary/30 group-hover:shadow-md transition-all">
                  <p className="text-foreground text-lg">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 7: EXTRAS == */}
      <section className="py-20 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        {/* Soft blur blobs for depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-black/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-white/5 rounded-full blur-[50px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
              Além das semanas temáticas, você terá acesso a:
            </h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Clube do Livro: leitura de um livro relacionado ao tema do mês.",
              "Trocas Práticas: encontros e atividades para aplicar os aprendizados na vida real.",
              "Aulas com especialistas: conteúdos exclusivos para acelerar seu crescimento.",
              "Acesso aos catalisadores: materiais extras e aulas com especialistas que potencializam resultados."
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-start space-x-4 bg-primary-foreground/10 p-6 rounded-2xl border border-primary-foreground/20 backdrop-blur-sm h-full">
                  <div className="mt-1 bg-accent rounded-full p-1 shrink-0 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* == SECTION 8: TRANSFORMAÇÃO == */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              O Método SQUAD não é só aprendizado, é transformação:
            </h2>
          </FadeIn>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
            <StaggerContainer className="space-y-6">
              {[
                { text: "Crescimento consistente nos negócios.", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/1.png" },
                { text: "Famílias estruturadas e fortalecidas.", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/2.png" },
                { text: "Fé sólida e aplicada em todas as áreas da vida.", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/3.png" },
                { text: "4 módulos diferentes a cada mês com atividades e conteúdos progressivos", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/4.png" },
                { text: "4 semanas de desafios temáticos (Negócios → Família → Fé → Integração)", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/5.png" },
                { text: "Planner digital e materiais de apoio", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/6.png" },
                { text: "Suporte via WhatsApp com acompanhamento", img: "https://sejatriade.com.br/wp-content/uploads/2025/10/7.png" },
              ].map((item, idx) => (
                <StaggerItem key={idx} className="flex items-center space-x-4 pb-6 border-b border-border/40 last:border-0 last:pb-0">
                  <div className="shrink-0 h-10 w-10">
                    <img src={item.img} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground font-medium">{item.text}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* == SECTION 9: CRONOGRAMA == */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Cronograma do Mês (Exemplo: Planejamento Estratégico)
            </h2>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Encontro Inaugural",
              "Semana 1: Negócios",
              "Semana 2: Família",
              "Semana 3: Fé",
              "Semana 4: Integração"
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="w-full sm:w-auto">
                <div className="bg-secondary px-8 py-4 rounded-full border border-border text-foreground font-medium flex items-center shadow-sm">
                  <CalendarDays className="w-5 h-5 mr-3 text-primary" />
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* == SECTION 10: CRESCIMENTO == */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Você vai continuar crescendo e evoluindo.
            </h2>
            <p className="text-xl text-accent font-medium">
              A diferença é COMO você vai crescer:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <FadeIn direction="right" className="bg-zinc-900/80 p-8 md:p-10 rounded-3xl border border-zinc-800">
              <ul className="space-y-8">
                {[
                  "Sem sobrecarga e estresse",
                  "Sem tentar equilibrar tudo sozinha",
                  "Sem decisões baseadas apenas na pressa ou na pressão"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-zinc-400 text-lg">
                    <XCircle className="w-7 h-7 text-red-500/80 mr-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" className="bg-gradient-to-br from-primary/20 to-zinc-900 p-8 md:p-10 rounded-3xl border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <TrendingUp className="w-40 h-40" />
              </div>
              <ul className="space-y-8 relative z-10">
                {[
                  "Com segurança e estratégias comprovadas",
                  "Com leveza e propósito",
                  "Com orientação profissional e suporte da comunidade"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-white text-lg font-medium">
                    <CheckCircle2 className="w-7 h-7 text-accent mr-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://sejatriade.com.br/wp-content/uploads/2025/10/Screenshot-2025-10-16-at-09.26.36.png",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/Screenshot-2025-10-16-at-09.26.29.png",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/Screenshot-2025-10-16-at-09.26.10.png",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/Screenshot-2025-10-16-at-09.25.59.png",
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-lg">
                <img src={src} alt="Resultado de crescimento" className="w-full h-full object-cover" />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 11: SOCIAL PROOF == */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border/50 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Várias mulheres já comprovaram:
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              O crescimento acontece de forma natural, sustentável e com muito propósito!
            </p>
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 12: PROTOCOLOS EXTRAS == */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Caixa de estratégias para usar quando quiser
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Além das semanas temáticas do mês, você terá Protocolos Extras para aplicar quando precisar:
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="rounded-3xl overflow-hidden shadow-xl border border-border/30">
              <img src="https://sejatriade.com.br/wp-content/uploads/2025/10/BANNER-MENTORIA-KOR-5-e1760105661103-1024x954.png" alt="Protocolos Extras" className="w-full h-auto" />
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Protocolos Especializados",
              "Protocolo Startup: Como estruturar seu negócio do zero e escalar com segurança",
              "Protocolo Família: Como organizar a rotina e fortalecer os laços familiares",
              "Protocolo Fé: Como desenvolver disciplina espiritual e maturidade bíblica",
              "Protocolo Gestão de Crises: Como tomar decisões estratégicas em momentos desafiadores",
              "Protocolo Integração: Como aplicar negócios, família e fé de forma harmoniosa no dia a dia"
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full border-border/60 hover:border-primary/40 transition-colors shadow-sm bg-card">
                  <CardContent className="p-6">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <p className="font-medium text-foreground text-lg leading-snug">{item}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* == SECTION 13: REFLEXÕES DIÁRIAS == */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <FadeIn className="md:col-span-2">
              <div className="rounded-3xl overflow-hidden mb-8 shadow-xl border border-zinc-800">
                <img src="https://sejatriade.com.br/wp-content/uploads/2025/10/BANNER-MENTORIA-KOR-4-e1760105745557-1005x1024.png" alt="Reflexões Diárias" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Reflexões Diárias para fortalecer sua fé
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                Sua rotina não precisa impedir seu desenvolvimento espiritual.
              </p>
              
              <div className="bg-primary/20 border-l-4 border-primary p-6 rounded-r-xl italic">
                <p className="text-lg text-zinc-200">
                  "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto."
                </p>
                <span className="block mt-4 text-accent font-medium">— Isaías 55:6</span>
              </div>
            </FadeIn>

            <div className="md:col-span-3">
              <StaggerContainer className="space-y-4">
                {[
                  "Áudios diários no WhatsApp com reflexões e versículos aplicáveis ao dia a dia",
                  "Momentos curtos de foco e clareza mesmo na correria",
                  "Estratégias para manter disciplina, superar desafios e tomar decisões alinhadas",
                  "Direcionamento para aplicar princípios bíblicos de forma prática em negócios, família e vida"
                ].map((item, idx) => (
                  <StaggerItem key={idx} className="flex items-start bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/50">
                    <MessageCircle className="w-6 h-6 text-accent shrink-0 mr-4 mt-0.5" />
                    <p className="text-zinc-300 text-lg leading-relaxed">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* == SECTION 14: QUEM PODE PARTICIPAR == */}
      <section className="py-24 px-6 bg-secondary/30 border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Quem pode participar</h2>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Comunidade SQUAD</h3>
            <p className="text-lg text-muted-foreground">
              A Comunidade SQUAD é ideal para mulheres que buscam resultados concretos em negócios, família e fé.
            </p>
          </FadeIn>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Mulheres que querem crescer e escalar seus negócios de forma estratégica",
                "Mulheres que desejam ter controle sobre suas rotinas e decisões empresariais",
                "Mulheres que buscam aumentar produtividade e foco, sem sobrecarga",
                "Mulheres que enfrentam desafios em gestão de tempo e prioridades",
                "Mulheres que querem desenvolver habilidades de liderança e tomada de decisão",
                "Mulheres que desejam fortalecer sua fé enquanto gerenciam negócios",
                "Mulheres que sonham em estruturar a vida familiar sem comprometer os resultados profissionais",
                "Mulheres que buscam integrar propósito, estratégia e disciplina em todas as áreas da vida",
                "Mulheres que querem viver com propósito e cumprir o chamado de Deus em negócios e família"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <FadeIn className="text-center">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 15: MÓDULOS EXCLUSIVOS == */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Exclusivos da Comunidade SQUAD
            </h2>
            <p className="text-xl text-muted-foreground">Módulos especializados inclusos:</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              "https://sejatriade.com.br/wp-content/uploads/2025/10/1.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/2.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/3.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/4.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/5.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/6-1.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/7-1.jpg",
              "https://sejatriade.com.br/wp-content/uploads/2025/10/8.jpg",
            ].map((src, i) => (
              <StaggerItem key={i}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/30">
                  <img src={src} alt={`Módulo ${i + 1}`} className="w-full h-auto object-cover" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <HotmartCTA />
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 16: CRONOGRAMA COMPLETO == */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Cronograma Completo da Comunidade SQUAD
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12">Sua jornada mês a mês:</p>
          </FadeIn>

          <div className="inline-block text-left bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <ul className="space-y-6">
              {[
                "06-12/10 – Bônus: TRÍADE",
                "14/10 – Encontro Inaugural da Comunidade",
                "21/10 - Início das aulas",
                "Novembro: Planejamento Estratégico para 2026."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-xl">
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0"></div>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* == SECTION 17: INVESTIMENTO == */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Seu Investimento como Time KÖR - SQUAD
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Por menos do que você gastaria com cursos avulsos, mentorias isoladas ou consultorias, você terá acesso à comunidade mais completa para mulheres empresárias, que integra negócios, família e fé, com suporte diário e estratégias aplicáveis.
            </p>
          </FadeIn>

          <FadeIn className="bg-gradient-to-b from-zinc-900 to-zinc-900/50 rounded-[2.5rem] border-2 border-accent/30 p-1 shadow-[0_0_50px_-12px_rgba(234,179,8,0.2)]">
            <div className="bg-zinc-900 rounded-[2.25rem] p-8 md:p-12">
              <div className="text-center mb-10">
                <img
                  src={`${import.meta.env.BASE_URL}images/kor-logo-branca.png`}
                  alt="KÖR"
                  className="h-14 w-auto mx-auto mb-6 opacity-90"
                />
                <span className="inline-block py-2 px-6 rounded-full bg-accent/20 text-accent font-bold tracking-widest uppercase text-sm mb-6 border border-accent/30">
                  Oferta Especial para o Time KÖR- SQUAD
                </span>
              </div>

              <ul className="space-y-5 mb-12 max-w-2xl mx-auto">
                {[
                  "1 ano de acesso completo à Comunidade SQUAD",
                  "Acesso a todos os temas e protocolos mensais durante 1 ano",
                  "Acompanhamento próximo como Missionária, com conteúdos e novidades antecipadas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mr-4 mt-0.5" />
                    <span className="text-zinc-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center border-t border-zinc-800 pt-10">
                <h3 className="text-xl text-zinc-400 font-medium mb-4 uppercase tracking-wider">Investimento</h3>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-display">
                  R$ 1.497,00 <span className="text-xl md:text-2xl text-zinc-400 font-sans font-normal">à vista</span>
                </div>
                <div className="text-2xl text-accent font-medium mb-10">
                  ou 12x de R$ 154,82
                </div>
                
                <HotmartCTA>QUERO FAZER PARTE AGORA</HotmartCTA>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 18: CLOSING QUOTE == */}
      <section className="py-24 px-6 bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <BookOpen className="w-12 h-12 text-primary/40 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-8 leading-tight">
              "Porque eu sei os planos que tenho para vocês são planos de paz e não de mal, para dar-lhes esperança e um futuro."
            </h2>
            <p className="text-xl text-primary font-bold mb-12">— Jeremias 29:11</p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Você tem sonhos incríveis para sua vida. E eles começam agora, unindo crescimento nos negócios, fortalecimento da família e maturidade espiritual!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* == SECTION 19: FAQ == */}
      <section className="py-24 px-6 bg-secondary/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              FAQ Comunidade SQUAD
            </h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full bg-card rounded-2xl p-4 md:p-8 shadow-sm border border-border/50">
              {[
                { q: "O que é a Comunidade SQUAD?", a: "A Comunidade SQUAD é um programa completo que combina crescimento em negócios, fortalecimento da família e maturidade espiritual. Baseada em 3 pilares: negócios, família e fé, ela oferece temas mensais, suporte contínuo e conteúdos exclusivos para transformar a vida de mulheres que desejam crescer com propósito." },
                { q: "Preciso participar de todas as semanas do mês?", a: "Não, mas é recomendado para aproveitar ao máximo o aprendizado. Cada semana tem foco diferente: negócios, família e fé, com uma semana final de integração." },
                { q: "Nunca participei de programas de desenvolvimento antes. É difícil?", a: "Não. A SQUAD é estruturada de forma progressiva e prática, permitindo que mulheres em qualquer estágio aprendam e implementem os conceitos no dia a dia." },
                { q: "Quanto tempo leva para começar a ver resultados?", a: "Os resultados começam a aparecer conforme você aplica os aprendizados em negócios, família e fé. Com disciplina e participação ativa, você verá impactos já nas primeiras semanas." },
                { q: "Quem pode participar da Comunidade SQUAD?", a: "Mulheres que querem crescer estrategicamente nos negócios, organizar a rotina familiar e desenvolver maturidade espiritual, independentemente da experiência ou do estágio atual de vida." },
                { q: "O que é necessário para começar?", a: "Um computador, celular ou tablet para acessar conteúdos e participar das atividades. Vontade de crescer e aplicar os aprendizados diariamente." },
                { q: "Posso mudar de tema ou foco durante o programa?", a: "Sim. Você pode acompanhar os temas mensais na ordem que desejar, mas é recomendado seguir a sequência para aproveitar a progressão natural do método." },
                { q: "E se eu tiver dúvidas durante o programa?", a: "Você terá suporte diário via WhatsApp e acesso a mentorias e grupos de trocas práticas com especialistas e outras participantes." },
                { q: "Qual é a diferença entre os temas mensais e os módulos extras?", a: "Os temas mensais trabalham um assunto central de forma prática e estruturada, enquanto os módulos extras oferecem estratégias específicas para situações pontuais ou desafios do dia a dia." },
                { q: "Preciso de equipamentos ou materiais caros?", a: "Não. Todo o programa é 100% digital e prático, sem necessidade de recursos adicionais." },
                { q: "Por que a Comunidade SQUAD é diferente?", a: "Porque integra negócios, família e fé, oferecendo não apenas conhecimento, mas implementação prática, suporte contínuo e uma comunidade de mulheres engajadas que avançam juntas." },
                { q: "Como faço para garantir minha vaga?", a: "Basta clicar no botão \"Quero fazer parte agora\" e seguir o passo a passo da inscrição." },
                { q: "O que acontece se eu perder a oferta para ser Time Kör SQUAD?", a: "Você poderá participar do programa normalmente, mas não terá acesso aos bônus e condições especiais da oferta." },
                { q: "Como funcionam os pagamentos?", a: "O pagamento pode ser feito à vista ou parcelado conforme condições da oferta no momento da inscrição." },
                { q: "E se eu me arrepender?", a: "A Comunidade oferece garantia de satisfação, permitindo desistência conforme política vigente, garantindo segurança para você investir no seu crescimento sem riscos." }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-base md:text-lg text-foreground hover:text-primary">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* == FOUNDERS: DÉBORA PIANA == */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                <img src="https://sejatriade.com.br/wp-content/uploads/2025/10/IMG_9526-683x1024.jpg" alt="Débora Piana" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Quem é Débora Piana</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Eu sou Débora Piana — cristã, empresária, mãe e empreendedora com experiência na liderança de múltiplos negócios. Mas o que realmente transformou minha visão foi entender que crescimento verdadeiro começa com propósito e fundamento sólido.</p>
                <p>Ao longo da minha jornada, vi muitas mulheres tentando fazer o negócio crescer, mas sentindo que a fé e a família ficavam em segundo plano. A sobrecarga, a culpa e a sensação de estar sozinha eram reais.</p>
                <p>Já acreditei que bastava esforço e dedicação. Mas foi quando uni estratégia de negócios com princípios bíblicos e equilíbrio familiar que tudo começou a fazer sentido: crescer no negócio, viver com propósito e fortalecer a família podem caminhar juntos.</p>
                <p>Essa convicção me move. Porque quando Deus ocupa o centro, cada decisão do negócio, cada momento com a família e cada escolha de vida ganha clareza e propósito.</p>
                <p>Foi assim que nasceu a TRÍADE, um programa simples, profundo e transformador, pensado para mulheres empresárias que querem crescer de forma estratégica, sem abrir mão da fé e da família.</p>
                <p>O que realmente muda… é o olhar sobre a vida. A disposição. A paz que vem quando negócio, família e fé caminham juntos, de forma sólida e equilibrada.</p>
                <p className="text-foreground font-medium">Hoje, minha missão é te lembrar que existe um caminho de crescimento inteligente, fundamentado e com propósito. Ele começa por dentro. Vamos juntas?</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* == FOUNDERS: BRUNA PIANA == */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="md:order-2">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                <img src="https://sejatriade.com.br/wp-content/uploads/2025/10/IMG_9521.jpg" alt="Bruna Piana" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Quem é Bruna Piana</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Sou Bruna Piana — cristã, casada com meu grande parceiro de vida, mãe de dois e arquiteta de formação e atuação. Minha família é minha prioridade, e é a partir dela que tudo o que faço ganha sentido.</p>
                <p>Ao longo da minha trajetória, entendi que a verdadeira construção de um lar vai muito além de paredes e fundações. Como arquiteta, aprendi a ouvir, sentir e transformar sonhos em espaços reais. Mas foi através da Palavra que compreendi que o lar mais importante é aquele edificado sobre fundamentos sólidos.</p>
                <p>Hoje, mais do que criar lares externos, meu chamado é também inspirar mulheres a fortalecerem os lares internos — famílias firmadas em princípios bíblicos, que trazem paz, benção e direção.</p>
                <p>Acredito que a mulher tem um papel essencial no desenho da família. Quando ela entende sua posição diante de Deus, cada decisão, cada cuidado e cada escolha dentro do lar passa a refletir equilíbrio e significado.</p>
                <p>É isso que me move: construir lares inteiros. Porque quando a estrutura visível e a estrutura invisível caminham juntas, o lar se torna um espaço de vida plena.</p>
                <p>Foi dessa convicção que nasceu a TRÍADE: um caminho simples, profundo e transformador para mulheres que desejam alinhar fé, família e negócios.</p>
                <p className="text-foreground font-medium">Minha missão é te lembrar que o lar é o seu primeiro ministério e quando ele está firmado na rocha, tudo encontra lugar.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* == SECTION 20: FOOTER == */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 text-center border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}images/kor-logo-branca.png`}
            alt="KÖR – Escola de Negócios e Família"
            className="h-16 w-auto mx-auto mb-8 opacity-70"
          />
          <p className="text-base font-display italic text-zinc-500 mb-6 leading-relaxed">
            "Porque eu sei os planos que tenho para vocês são planos de paz e não de mal, para dar-lhes esperança e um futuro." — Jeremias 29:11
          </p>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
