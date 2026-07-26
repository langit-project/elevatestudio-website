"use client";

import { Link } from "react-router-dom";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { NavAction } from "@/components/shared/NavAction";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FilterTabs } from "@/components/shared/FilterTabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatCard } from "@/components/shared/StatCard";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Camera, Video, Palette, Users, Info } from "lucide-react";

const ComponentsPage = () => {
  return (
    <TooltipProvider>
      <div className="pt-24 min-h-screen bg-primary-white">
        <div className="px-[5%] py-16">
          <div className="container mx-auto">
            {/* Page Header */}
            <div className="mb-16">
              <Link
                to="/"
                className="text-sm font-bold uppercase tracking-widest text-primary-black/55 hover:text-primary-black transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold uppercase text-primary-black">
                Design System
              </h1>
              <p className="mt-4 text-primary-black/70 max-w-2xl">
                Komponen reusable dan token desain yang digunakan di seluruh
                aplikasi Elevate Studios.
              </p>
            </div>

            {/* ==================== COLORS ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Colors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="h-24 rounded-lg bg-primary-black shadow-md" />
                  <p className="mt-3 text-sm font-bold">Primary Black</p>
                  <p className="text-xs text-primary-black/55">#16140a</p>
                </div>
                <div>
                  <div className="h-24 rounded-lg bg-primary-white border border-primary-black/10 shadow-md" />
                  <p className="mt-3 text-sm font-bold">Primary White</p>
                  <p className="text-xs text-primary-black/55">#FFFFFF</p>
                </div>
                <div>
                  <div className="h-24 rounded-lg bg-accent-yellow shadow-md" />
                  <p className="mt-3 text-sm font-bold">Accent Yellow</p>
                  <p className="text-xs text-primary-black/55">#FFCE08</p>
                </div>
                <div>
                  <div className="h-24 rounded-lg bg-dark-accent shadow-md" />
                  <p className="mt-3 text-sm font-bold">Dark Accent</p>
                  <p className="text-xs text-primary-black/55">#54351b</p>
                </div>
              </div>
            </section>

            {/* ==================== TYPOGRAPHY ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Typography
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-2">
                    Heading — League Spartan Variable
                  </p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-black">
                    H1 Display
                  </h1>
                </div>
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-2">
                    Heading — League Spartan Variable
                  </p>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-black">
                    H2 Section Title
                  </h2>
                </div>
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-2">
                    Heading — League Spartan Variable
                  </p>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-black">
                    H3 Subsection
                  </h3>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-2">
                    Body — Quicksand Variable
                  </p>
                  <p className="text-base text-primary-black/70 leading-relaxed max-w-2xl">
                    Elevate adalah studio kreatif yang berfokus pada produksi
                    visual, pengembangan konten, dan kolaborasi kreatif lintas
                    disiplin. Kami bekerja bersama brand, organisasi, dan
                    individu untuk menghasilkan karya visual yang relevan.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-2">
                    Caption — Quicksand Variable
                  </p>
                  <p className="text-xs text-primary-black/55 uppercase tracking-[0.2em] font-bold">
                    Uppercase Label Style
                  </p>
                </div>
              </div>
            </section>

            {/* ==================== BUTTONS ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Buttons
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    ElevateButton — Variants
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <ElevateButton variant="primary">Primary</ElevateButton>
                    <ElevateButton variant="accent">Accent</ElevateButton>
                    <ElevateButton variant="outlineInvert">Outline Invert</ElevateButton>
                    <ElevateButton variant="default">Default</ElevateButton>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    ElevateButton — Sizes
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <ElevateButton size="xs">Extra Small</ElevateButton>
                    <ElevateButton size="sm">Small</ElevateButton>
                    <ElevateButton size="default">Default</ElevateButton>
                    <ElevateButton size="lg">Large</ElevateButton>
                    <ElevateButton size="xl">Extra Large</ElevateButton>
                    <ElevateButton size="full" className="w-48">Full Width</ElevateButton>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== BADGES ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Badges
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="secondary" className="bg-accent-yellow text-primary-black">
                  Pricing
                </Badge>
              </div>
            </section>

            {/* ==================== CARDS ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Cards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Visual Production</CardTitle>
                    <CardDescription>
                      Produksi konten visual profesional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-black/70">
                      Cinematic brand video, foto berkualitas tinggi, dan pro
                      editing untuk brand Anda.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <ElevateButton size="sm">Mulai Proyek</ElevateButton>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Event Documentation</CardTitle>
                    <CardDescription>
                      Dokumentasi acara komprehensif.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-black/70">
                      Full day coverage, highlight video, dan digital gallery
                      untuk momen berharga.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <ElevateButton size="sm">Book Now</ElevateButton>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Motion Design</CardTitle>
                    <CardDescription>
                      Desain visual dan motion graphics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-black/70">
                      Custom motion graphics, visual identity assets, dan brand
                      style guide.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <ElevateButton size="sm">Start Designing</ElevateButton>
                  </CardFooter>
                </Card>
              </div>
            </section>

            {/* ==================== INPUTS ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Inputs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-black/55 mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="admin@elevatestudios.id" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-black/55 mb-2 block">
                    Name
                  </label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-black/55 mb-2 block">
                    Message
                  </label>
                  <Input type="text" placeholder="Tell us about your project..." />
                </div>
              </div>
            </section>

            {/* ==================== SEPARATOR ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Separator
              </h2>
              <div className="max-w-2xl space-y-4">
                <p className="text-primary-black/70">Content above separator</p>
                <Separator />
                <p className="text-primary-black/70">Content below separator</p>
                <Separator className="bg-accent-yellow" />
                <p className="text-primary-black/70">Custom colored separator</p>
              </div>
            </section>

            {/* ==================== TABS (Radix) ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Tabs (Radix)
              </h2>
              <Tabs defaultValue="tab1" className="max-w-2xl">
                <TabsList>
                  <TabsTrigger value="tab1">Overview</TabsTrigger>
                  <TabsTrigger value="tab2">Services</TabsTrigger>
                  <TabsTrigger value="tab3">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="py-4">
                  <p className="text-primary-black/70">
                    Elevate adalah studio kreatif yang berfokus pada produksi
                    visual berkualitas tinggi.
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="py-4">
                  <p className="text-primary-black/70">
                    Kami menyediakan layanan visual production, event
                    documentation, motion design, dan micro event execution.
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="py-4">
                  <p className="text-primary-black/70">
                    Hubungi kami di admin@elevatestudios.id atau +62
                    859-2740-0808.
                  </p>
                </TabsContent>
              </Tabs>
            </section>

            {/* ==================== FILTER TABS (Custom) ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Filter Tabs (Custom)
              </h2>
              <p className="text-primary-black/70 mb-6">
                Custom filter tabs dengan underline accent — cocok untuk
                portfolio filter, category switcher, dll.
              </p>
              <div className="border border-primary-black/10 rounded-lg p-4 inline-block">
                <FilterTabs
                  options={[
                    { id: "all", name: "All Work" },
                    { id: "production", name: "Visual Production" },
                    { id: "event", name: "Event Documentation" },
                    { id: "design", name: "Motion & Design" },
                  ]}
                  activeId="all"
                  onChange={() => {}}
                />
              </div>
            </section>

            {/* ==================== DIALOG ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Dialog
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <ElevateButton>Open Dialog</ElevateButton>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Mulai Proyek</DialogTitle>
                    <DialogDescription>
                      Hubungi kami untuk mendiskusikan kebutuhan proyek Anda.
                      Kami siap membantu mewujudkan visi Anda.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input type="text" placeholder="Nama Anda" />
                    <Input type="email" placeholder="Email Anda" />
                  </div>
                  <DialogFooter>
                    <ElevateButton variant="outlineInvert">Batal</ElevateButton>
                    <ElevateButton>Kirim</ElevateButton>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </section>

            {/* ==================== TOOLTIP ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Tooltip
              </h2>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ElevateButton variant="outlineInvert" size="sm">
                      Hover me
                    </ElevateButton>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tooltip content</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="size-5 text-primary-black/55 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>

            {/* ==================== ACCORDION ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Accordion
              </h2>
              <div className="max-w-2xl">
                <Accordion type="single" collapsible>
                  <AccordionItem value="demo-1">
                    <AccordionTrigger className="cursor-pointer hover:no-underline text-primary-black font-bold uppercase tracking-wide hover:text-accent-yellow transition-colors">
                      Berapa lama waktu pengerjaan proyek?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-black/70 leading-relaxed">
                      Timeline proyek bervariasi tergantung pada ruang lingkup dan
                      kompleksitas. Kami biasanya bekerja dalam fase-fase
                      terstruktur.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="demo-2">
                    <AccordionTrigger className="cursor-pointer hover:no-underline text-primary-black font-bold uppercase tracking-wide hover:text-accent-yellow transition-colors">
                      Apakah Elevate menerima proyek di luar Bandung?
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-black/70 leading-relaxed">
                      Ya. Kami berkolaborasi dengan klien di berbagai kota di
                      Indonesia.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <Separator className="mb-20" />

            {/* ==================== SHARED COMPONENTS ==================== */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold uppercase text-primary-black mb-8">
                Shared Components
              </h2>

              <div className="space-y-16">
                {/* SectionHeader */}
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    SectionHeader — Left aligned, yellow accent
                  </p>
                  <SectionHeader
                    label="About"
                    title='Crafting <span class="text-accent-yellow">Stories</span> Through Visuals'
                  />
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    SectionHeader — Center aligned, dark accent
                  </p>
                  <SectionHeader
                    label="Pricing"
                    title='Our <span class="text-accent-yellow">Pricing</span>'
                    description="Harga transparan untuk efisiensi dan hasil berkualitas tinggi."
                    align="center"
                  />
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    SectionHeader — Left aligned, highlight accent (dark label + yellow underline)
                  </p>
                  <SectionHeader
                    label="Kontak"
                    title="Mari Berkolaborasi"
                    labelHighlight
                    description="Accent highlight: label text dark-accent dengan background kuning di belakang teks."
                  />
                </div>

                {/* StatCard */}
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    StatCard
                  </p>
                  <div className="grid grid-cols-2 gap-8 max-w-md">
                    <StatCard value="50+" label="Projects Done" />
                    <StatCard value="20+" label="Happy Clients" />
                  </div>
                </div>

                {/* ServiceCard */}
                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    ServiceCard — Light
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard
                      icon={Camera}
                      title="Visual Production"
                      description="Produksi fotografi dan videografi berkualitas tinggi."
                    />
                    <ServiceCard
                      icon={Video}
                      title="Event Documentation"
                      description="Dokumentasi acara komprehensif."
                    />
                    <ServiceCard
                      icon={Palette}
                      title="Motion Design"
                      description="Motion graphics dan desain visual dinamis."
                    />
                    <ServiceCard
                      icon={Users}
                      title="Micro Event"
                      description="Dukungan teknis acara skala kecil."
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    ServiceCard — Dark
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-primary-black p-8 rounded-lg">
                    <ServiceCard
                      icon={Camera}
                      title="Visual Production"
                      description="Produksi fotografi dan videografi berkualitas tinggi."
                      dark
                    />
                    <ServiceCard
                      icon={Video}
                      title="Event Documentation"
                      description="Dokumentasi acara komprehensif."
                      dark
                    />
                    <ServiceCard
                      icon={Palette}
                      title="Motion Design"
                      description="Motion graphics dan desain visual dinamis."
                      dark
                    />
                    <ServiceCard
                      icon={Users}
                      title="Micro Event"
                      description="Dukungan teknis acara skala kecil."
                      dark
                    />
                  </div>
                </div>
              </div>
            </section>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    NavAction — Nav variant (yellow hover)
                  </p>
                  <div className="flex gap-6">
                    <NavAction href="#" label="Home" />
                    <NavAction href="#" label="Services" />
                    <NavAction href="#" label="Portfolio" />
                    <NavAction href="#" label="Contact" />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    NavAction — Footer variant (underline hover)
                  </p>
                  <div className="flex gap-6 bg-accent-yellow p-4 rounded-lg">
                    <NavAction variant="footer" href="#" label="Home" />
                    <NavAction variant="footer" href="#" label="Services" />
                    <NavAction variant="footer" href="#" label="Portfolio" />
                    <NavAction variant="footer" href="#" label="Contact" />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-primary-black/55 uppercase tracking-widest mb-4">
                    NavAction — Social variant (scale hover)
                  </p>
                  <div className="flex gap-3 bg-accent-yellow p-4 rounded-lg">
                    <NavAction variant="social" href="#" icon={Camera} label="Instagram" />
                    <NavAction variant="social" href="#" icon={Video} label="YouTube" />
                    <NavAction variant="social" href="#" icon={Users} label="LinkedIn" />
                  </div>
                </div>
      </div>
    </TooltipProvider>
  );
};

export default ComponentsPage;
