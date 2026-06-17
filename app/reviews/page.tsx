import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import HubMasthead from "@/components/ui/HubMasthead";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Supplement Reviews — Evidence-Rated, Formula-First",
  description: "Independent supplement reviews rated via the Fitlab Scoring Protocol. Each covers formula quality, label transparency, third-party testing, and value.",
  alternates: { canonical: "/reviews" },
};

type Review = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  figure: string;
  rating: ReviewRating;
  verdict: string;
  publishedAt: string;
  tags: string[];
  thirdParty: boolean;
  accent: string;
  image?: string;
  buyUrl?: string;
};

const reviews: Review[] = [
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    category: "Protein Powder",
    figure: "REV-001",
    rating: 9,
    verdict: "The benchmark whey. Clean label, consistent yield, Informed Choice certified.",
    publishedAt: "2025-04-10",
    tags: ["Whey", "Muscle Gain", "Informed Choice"],
    thirdParty: true,
    accent: "#C4622D",
    image: "/products/on-gold-standard-whey.webp",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    figure: "REV-002",
    rating: 8,
    verdict: "Best budget creatine — pure, clean, and priced well per gram.",
    publishedAt: "2025-03-08",
    tags: ["Creatine", "Monohydrate", "Budget-Friendly"],
    thirdParty: true,
    accent: "#2D6A4F",
  },
  {
    slug: "wellmedr",
    title: "Wellmedr Health Supplement",
    brand: "Wellmedr",
    category: "Wellness",
    figure: "REV-003",
    rating: 7,
    verdict: "Decent formulation for general wellness with reasonable label transparency.",
    publishedAt: "2025-05-01",
    tags: ["Wellness", "Health", "General Use"],
    thirdParty: false,
    accent: "#D4A96A",
    image: "/products/wellmedr-product.webp",
  },
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey Isolate",
    brand: "Dymatize",
    category: "Protein Powder",
    figure: "REV-004",
    rating: 9,
    verdict: "Dual NSF + Informed Choice certified hydrolyzed isolate. 25g protein, 2.7g leucine, benchmark flavour. Premium price is the only caveat.",
    publishedAt: "2026-05-27",
    tags: ["Whey Isolate", "Hydrolyzed", "NSF Certified", "Informed Choice"],
    thirdParty: true,
    accent: "#2D6A4F",
    image: "/products/dymatize-iso100.webp",
  },
  {
    slug: "ancestral-supplements-beef-liver",
    title: "Ancestral Supplements Beef Liver",
    brand: "Ancestral Supplements",
    category: "Organ Supplements",
    figure: "REV-2026-044",
    rating: 8,
    verdict: "Premium single-organ liver from NZ grass-fed cattle. Freeze-dried below body temperature to preserve B vitamins and CoQ10. Highly nutrient-dense but Vitamin A limits require monitoring.",
    publishedAt: "2026-05-27",
    tags: ["Grass-Fed", "New Zealand", "Beef Liver", "Freeze-Dried"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/ancestral-supplements-beefliv.webp",
    buyUrl: "https://amzn.to/49RAlmU",
  },
  {
    slug: "heart-and-soil-beef-organs",
    title: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    category: "Organ Supplements",
    figure: "REV-2026-046",
    rating: 9,
    verdict: "Rigorously transparent sourcing from regenerative US farms. Proprietary organ blends are backed by strong editorial rationale. Premium pricing reflects genuine quality.",
    publishedAt: "2026-05-20",
    tags: ["Regenerative", "US Sourced", "Organ Blend", "Paul Saladino"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/HEART-SOIL.webp",
    buyUrl: "https://amzn.to/3Q2X5ts",
  },
  {
    slug: "left-coast-performance-beef-organs",
    title: "Left Coast Performance Beef Organs",
    brand: "Left Coast Performance",
    category: "Organ Supplements",
    figure: "REV-2026-047",
    rating: 8,
    verdict: "Best value in the category: 5-organ NZ blend with competitive capsule yield at $0.53/serving. Minor deductions for missing COA transparency.",
    publishedAt: "2026-05-20",
    tags: ["Best Value", "New Zealand", "5-Organ", "Budget"],
    thirdParty: false,
    accent: "#A0522D",
    image: "/products/left-coast-performance-beef-organ.webp",
    buyUrl: "https://amzn.to/4nUmi5H",
  },
  {
    slug: "perfect-supplements-beef-liver",
    title: "Perfect Supplements Beef Liver",
    brand: "Perfect Supplements",
    category: "Organ Supplements",
    figure: "REV-2026-048",
    rating: 8,
    verdict: "Premium single-organ liver from Uruguay grass-fed cattle. USDA-inspected, desiccated at low temp, Informed Sport certified. Strong for targeted liver supplementation.",
    publishedAt: "2026-05-20",
    tags: ["Beef Liver", "Uruguay", "Informed Sport", "Single Organ"],
    thirdParty: true,
    accent: "#A0522D",
    image: "/products/perfect-supplement.webp",
    buyUrl: "https://amzn.to/4odctAl",
  },
  {
    slug: "force-factor-primal-origins",
    title: "Force Factor Primal Origins",
    brand: "Force Factor",
    category: "Organ Supplements",
    figure: "REV-2026-049",
    rating: 7,
    verdict: "Accessible retail option with 5-organ blend. Undisclosed sourcing country and proprietary blend structure limit score. Good entry point at $0.50/serving.",
    publishedAt: "2026-05-20",
    tags: ["Retail Available", "5-Organ", "Budget-Friendly"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/Force-Factor-Primal-Origins.webp",
    buyUrl: "https://amzn.to/43wF5e3",
  },
  {
    slug: "forest-leaf-beef-organ-complex",
    title: "Forest Leaf Beef Organ Complex",
    brand: "Forest Leaf",
    category: "Organ Supplements",
    figure: "REV-2026-050",
    rating: 7,
    verdict: "5-organ blend with reasonable dosing and competitive price. Sourcing transparency below best-in-class; no third-party testing documentation provided.",
    publishedAt: "2026-05-20",
    tags: ["5-Organ", "Budget", "Amazon Available"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/ForestLeaf-Beef-Organ.webp",
    buyUrl: "https://amzn.to/4dzvZTM",
  },
  {
    slug: "codeage-beef-organs",
    title: "Codeage Beef Organs",
    brand: "Codeage",
    category: "Organ Supplements",
    figure: "REV-2026-051",
    rating: 7,
    verdict: "Non-GMO Verified and clean label with 5-organ blend. Sourcing country undisclosed; value efficiency slightly below category average at $0.28/g active.",
    publishedAt: "2026-05-20",
    tags: ["Non-GMO", "5-Organ", "Clean Label"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/Codeage.webp",
    buyUrl: "https://amzn.to/4wUtzqk",
  },
  {
    slug: "enviromedica-terraferrin",
    title: "Enviromedica Terraferrin",
    brand: "Enviromedica",
    category: "Organ Supplements",
    figure: "REV-2026-052",
    rating: 7,
    verdict: "Unique liver + lactoferrin formula with clinical evidence for iron absorption improvement. Argentine sourcing, premium price at $1.10/serving.",
    publishedAt: "2026-05-20",
    tags: ["Lactoferrin", "Iron Absorption", "Argentine", "Unique Formula"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/Enviromedica.webp",
    buyUrl: "https://amzn.to/4vhPma3",
  },
  {
    slug: "happee-beef-organ-women",
    title: "Happee Beef Organs for Women",
    brand: "Happee",
    category: "Organ Supplements",
    figure: "REV-2026-053",
    rating: 7,
    verdict: "Female-specific formula with liver, spleen, kidney, and bovine uterus from NZ cattle. Best value for women's organ supplementation at $0.63/serving.",
    publishedAt: "2026-05-20",
    tags: ["Women's Formula", "New Zealand", "4-Organ", "Female Health"],
    thirdParty: false,
    accent: "#A0522D",
    image: "/products/Happee-Grass-Fed-Beef-Organ.webp",
    buyUrl: "https://amzn.to/4uDGXOc",
  },
  {
    slug: "arrae-bloat",
    title: "Arrae Bloat Digestive Capsules",
    brand: "Arrae",
    category: "Digestive Enzymes",
    figure: "REV-2026-054",
    rating: 7,
    verdict: "Clean, filler-free organic herb blend. Ginger underdosed, 5 of 6 amounts hidden. Marketing outpaces the evidence.",
    publishedAt: "2026-05-30",
    tags: ["Gut Health", "Bloating", "Digestive Enzymes", "Organic", "Women's Health"],
    thirdParty: false,
    accent: "#C4622D",
    image: "/products/Arrae-Bloat.webp",
    buyUrl: "https://amzn.to/4wZ3tCG",
  },
  {
    slug: "transparent-labs-creatine-hmb",
    title: "Transparent Labs Creatine HMB",
    brand: "Transparent Labs",
    category: "Creatine",
    figure: "REV-2026-056",
    rating: 8,
    verdict: "5g creatine + 1.5g MyHMB® + Vitamin D3 + BioPerine. Informed Sport certified. The premium stack for caloric-deficit or injury-recovery training.",
    publishedAt: "2026-05-30",
    tags: ["Creatine", "HMB", "Informed Sport", "Vitamin D3", "Premium"],
    thirdParty: true,
    accent: "#3A5F8B",
    image: "/products/tl-creatine-hmb.webp",
    buyUrl: "https://amzn.to/3Qba8ZR",
  },
  {
    slug: "gorilla-mind-creatine-hcl",
    title: "Gorilla Mind Creatine HCl",
    brand: "Gorilla Mind",
    category: "Creatine",
    figure: "REV-2026-057",
    rating: 7,
    verdict: "CON-CRĒT® creatine hydrochloride + pepsin. 38× more soluble than monohydrate. Best choice for GI-sensitive users who can't tolerate standard creatine.",
    publishedAt: "2026-05-30",
    tags: ["Creatine HCl", "CON-CRĒT®", "Pepsin", "GI-Friendly", "Unflavored"],
    thirdParty: false,
    accent: "#3A5F8B",
    image: "/products/GorillaMindCreatineHCl.webp",
    buyUrl: "https://amzn.to/3PAhINz",
  },
  {
    slug: "gorilla-mind-creatine-monohydrate",
    title: "Gorilla Mind Creatine Micronized",
    brand: "Gorilla Mind",
    category: "Creatine",
    figure: "REV-2026-058",
    rating: 8,
    verdict: "100 servings of pure micronized creatine monohydrate at $0.35/serving. HPLC tested. The value benchmark in the category.",
    publishedAt: "2026-05-30",
    tags: ["Creatine", "Micronized", "Best Value", "100 Servings", "HPLC Tested"],
    thirdParty: false,
    accent: "#3A5F8B",
    image: "/products/GorillaMindreatineMonohydrateMicronizedPowder.webp",
    buyUrl: "https://amzn.to/3PAiUk1",
  },
  {
    slug: "arrae-tone-gummies",
    title: "Arrae Tone Gummies",
    brand: "Arrae",
    category: "Creatine",
    figure: "REV-2026-055",
    rating: 7,
    verdict: "5g creatine monohydrate in a vegan gummy with ginger and Slimbiotics postbiotic. Correct dose, full transparency — premium price is the honest trade-off.",
    publishedAt: "2026-05-30",
    tags: ["Creatine", "Gummy", "Women's Fitness", "Vegan", "Postbiotic"],
    thirdParty: false,
    accent: "#3A5F8B",
    image: "/products/arrae-tone-1.webp",
    buyUrl: "https://amzn.to/4u9uAbn",
  },
  {
    slug: "performance-lab-sleep",
    title: "Performance Lab Sleep",
    brand: "Performance Lab",
    category: "Sleep Supplement",
    figure: "REV-2026-060",
    rating: 8 as ReviewRating,
    verdict: "Four ingredients, every dose disclosed, no synthetic melatonin. Clean Label Project certified. The benchmark for transparent sleep supplementation at $1.47/serving.",
    publishedAt: "2026-05-31",
    tags: ["Sleep", "Clean Label Project", "No Syn. Melatonin", "CherryPURE"],
    thirdParty: true,
    accent: "#3A6FA8",
    image: "/products/perlab-sleep.webp",
    buyUrl: "https://amzn.to/4x4WZCs",
  },
  {
    slug: "nested-naturals-luna",
    title: "Nested Naturals Luna Sleep Aid",
    brand: "Nested Naturals",
    category: "Sleep Supplement",
    figure: "REV-2026-061",
    rating: 7 as ReviewRating,
    verdict: "Full label, 8 ingredients, $0.73/serving, lifetime guarantee. Best-value transparent sleep supplement. 6mg melatonin is the honest long-term concern.",
    publishedAt: "2026-05-31",
    tags: ["Sleep", "Full Label", "L-Theanine", "Best Value"],
    thirdParty: true,
    accent: "#3D7A5E",
    image: "/products/Luna-sleep.webp",
    buyUrl: "https://amzn.to/3Sb2LlK",
  },
  {
    slug: "seed-pm-02",
    title: "Seed PM-02 Sleep + Restore",
    brand: "Seed",
    category: "Sleep Supplement",
    figure: "REV-2026-062",
    rating: 7 as ReviewRating,
    verdict: "Most innovative sleep supplement: biphasic 500mcg melatonin, Shoden ashwagandha, dual Co-Biotic capsule. Ashwagandha dose undisclosed. $1.17/serving.",
    publishedAt: "2026-05-31",
    tags: ["Sleep", "Biphasic Melatonin", "Ashwagandha", "Co-Biotic"],
    thirdParty: true,
    accent: "#2A8A8A",
    image: "/products/Sleep-PM-02.webp",
    buyUrl: "https://amzn.to/4eiBPZ1",
  },
  {
    slug: "yusleep",
    title: "YuSleep Sleep Drops",
    brand: "YuSleep",
    category: "Sleep Supplement",
    figure: "REV-2026-059",
    rating: 4,
    verdict: "Promising ingredient selection — L-theanine, magnesium glycinate, apigenin, 0.9mg melatonin — but 9 of 10 doses are undisclosed. No third-party testing. $2.30/serving.",
    publishedAt: "2026-05-31",
    tags: ["Sleep", "Liquid Drops", "Melatonin", "L-Theanine"],
    thirdParty: false,
    accent: "#6B4FA0",
    image: "/products/yusleep.webp",
    buyUrl: "https://maxwebpromo.com/11204/3795/3/",
  },
  {
    slug: "transparent-labs-bulk-black-review",
    title: "Transparent Labs BULK Black",
    brand: "Transparent Labs",
    category: "Pre-Workout",
    figure: "REV-2026-050",
    rating: 9,
    verdict: "16 active ingredients at clinical doses, 305mg dual-phase caffeine, stevia sweetened, and Informed Choice certified. Pre-workout benchmark.",
    publishedAt: "2026-05-29",
    tags: ["Pre-Workout", "High-Stim", "Informed Choice", "Clinical Dose"],
    thirdParty: true,
    accent: "#C4622D",
    image: "/products/tl-bulk-black-preworkout.webp",
    buyUrl: "https://amzn.to/3RPRlnm",
  },
  {
    slug: "legion-pulse-pre-workout-review-2026",
    title: "Legion Pulse Pre-Workout",
    brand: "Legion Athletics",
    category: "Pre-Workout",
    figure: "REV-2026-051",
    rating: 9,
    verdict: "6 clinically dosed ingredients, zero proprietary blends, Labdoor certified. Standout 1:1 caffeine-to-theanine ratio (350mg each) for smooth focus.",
    publishedAt: "2026-05-29",
    tags: ["Pre-Workout", "High-Stim", "Labdoor Certified", "Natural Sweeteners"],
    thirdParty: true,
    accent: "#D4A96A",
    image: "/products/legion-pulse-preworkout.webp",
    buyUrl: "https://amzn.to/4o4r29e",
  },
  {
    slug: "seed-14-day-gut-reset",
    title: "Seed 14-Day Gut Reset Review: Can 2 Weeks Really Reset Your Microbiome?",
    brand: "Seed",
    category: "Gut Health",
    figure: "REV-2026-066",
    rating: 8,
    verdict: "The identical 24-strain, 53.6B AFU DS-01 probiotic formula in a 14-day intensive course. Excellent post-antibiotics, for travel, or trial.",
    publishedAt: "2026-05-31",
    tags: ["Probiotic", "Gut Health", "14-Day Reset", "No Subscription"],
    thirdParty: true,
    accent: "#3D8B37",
    image: "/products/seed-14-day.webp",
    buyUrl: "https://www.amazon.com/SEED-DS-01%C2%AE-14-Day-Gut-Rescue/dp/B0CPTT5TWD",
  },
  {
    slug: "seed-ds-01",
    title: "Seed DS-01® Daily Synbiotic Review: Does This 24-Strain Probiotic Actually Work?",
    brand: "Seed",
    category: "Probiotic / Synbiotic",
    figure: "REV-2026-066",
    rating: 8,
    verdict: "24 genomically confirmed strains (53.6B AFU total) with non-fermenting prebiotic. Rigorous sequencing, stability tested, benchmark synbiotic.",
    publishedAt: "2026-05-31",
    tags: ["Probiotic", "Synbiotic", "ViaCap", "Gut Health"],
    thirdParty: true,
    accent: "#3D8B37",
    image: "/products/seed-ds-01.webp",
    buyUrl: "https://www.amazon.com/Seed-DS-01-Daily-Synbiotic-Multi-Strain/dp/B0CMJR4XGR",
  },
  {
    slug: "seed-pds-08",
    title: "Seed PDS-08™ Review: The Best Probiotic for Kids Ages 3–17?",
    brand: "Seed",
    category: "Pediatric Probiotic",
    figure: "REV-2026-064",
    rating: 8,
    verdict: "9 pediatric-specific strains (24.5B AFU) with 5g prebiotic fiber. Powder sachets. The first kids' synbiotic with a product-specific double-blind RCT.",
    publishedAt: "2026-05-31",
    tags: ["Kids Probiotic", "Pediatric", "RCT Tested", "Powder Sachet"],
    thirdParty: true,
    accent: "#3D8B37",
    image: "/products/seed-pds-08.webp",
    buyUrl: "https://www.amazon.com/Seed-PDS-08%C2%AE-Pediatric-Daily-Synbiotic/dp/B0CPTRHQP7",
  },
  {
    slug: "seed-dm-02",
    title: "Seed DM-02™ Review: Is This the Most Bioavailable Multivitamin on the Market?",
    brand: "Seed",
    category: "Multivitamin",
    figure: "REV-2026-067",
    rating: 7,
    verdict: "20 vitamins/minerals at 100% DV in chelated forms with ViaCap prebiotic inner capsule. Undisclosed Cellular Energy Complex (CoQ10, PQQ) doses.",
    publishedAt: "2026-05-31",
    tags: ["Multivitamin", "Chelated Minerals", "Co-Biotic", "Vegan"],
    thirdParty: true,
    accent: "#3D8B37",
    image: "/products/seed-dm-02.webp",
    buyUrl: "https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M",
  },
  {
    slug: "seed-am-02",
    title: "Seed AM-02™ Review: A Science-Backed Nootropic for Clean Energy & Focus",
    brand: "Seed",
    category: "Nootropic / Energy Supplement",
    figure: "REV-2026-065",
    rating: 7,
    verdict: "Caffeine-free nootropic with Cereboost ginseng, TeaCrine, and methyliberine. Co-Biotic GABA inner capsule. Undisclosed individual complex doses.",
    publishedAt: "2026-05-31",
    tags: ["Nootropic", "Caffeine-Free", "Co-Biotic", "Energy"],
    thirdParty: true,
    accent: "#3D8B37",
    image: "/products/seed-am-02.webp",
    buyUrl: "https://www.amazon.com/Seed-AM-02-Energy-Focus-Caffeine-Free/dp/B0FHYW18X6",
  },
];

const categoryGroups: { label: string; categories: string[] }[] = [
  { label: "Protein & Gainers", categories: ["Protein Powder", "Mass Gainer"] },
  { label: "Performance", categories: ["Creatine", "Pre-Workout", "Amino Acids"] },
  { label: "Health & Wellness", categories: ["Wellness", "Vitamins", "Adaptogens", "Digestive Enzymes", "Gut Health", "Probiotic / Synbiotic", "Pediatric Probiotic", "Multivitamin", "Nootropic / Energy Supplement"] },
  { label: "Body Composition", categories: ["Fat Loss", "Thermogenics"] },
  { label: "Organ Supplements", categories: ["Organ Supplements"] },
];

const ratingColor = (r: ReviewRating): string => {
  if (r >= 9) return "#1A6B3A";
  if (r >= 7) return "#0E8784";
  return "#8A4020";
};

const ratingBg = (r: ReviewRating): string => {
  if (r >= 9) return "rgba(26,107,58,0.08)";
  if (r >= 7) return "rgba(14,135,132,0.08)";
  return "rgba(138,64,32,0.08)";
};

const stats = [
  { label: "Reviews Published", value: reviews.length.toString() },
  { label: "Avg FSP Score", value: (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) },
  { label: "3rd-Party Verified", value: `${reviews.filter(r => r.thirdParty).length}` },
  { label: "Categories Covered", value: "15" },
];

export default function ReviewsHubPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E5E7EB", backgroundColor: "#F8FAFB" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E5E7EB" }}>/</span>
          <span style={{ fontSize: 12, color: "#6B7280", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>Reviews</span>
        </div>
      </div>

      {/* Hero */}
      <HubMasthead
        eyebrow={`Review Index · ${reviews.length} Reviews`}
        kicker="Fitlab Scoring Protocol"
        title="Supplement"
        titleAccent="Reviews"
        subtitle="Every review is scored on five pillars: formula integrity, label transparency, third-party verification, value efficiency, and practical quality. No affiliate influence on verdicts."
        stats={stats}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Category jump links */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categoryGroups.map((g) => (
            <a
              key={g.label}
              href={`#${g.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              style={{ padding: "5px 14px", border: "1px solid #E5E7EB", borderRadius: 20, fontSize: 11, color: "#6B7280", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none", backgroundColor: "#FFFFFF" }}
            >
              {g.label}
            </a>
          ))}
          <Link href="/category" style={{ padding: "5px 14px", border: "1px solid rgba(14,135,132,0.3)", borderRadius: 20, fontSize: 11, color: "#0E8784", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none", backgroundColor: "rgba(14,135,132,0.04)" }}>
            Browse by Category →
          </Link>
        </div>

        {/* Grouped review sections */}
        {categoryGroups.map((group) => {
          const groupReviews = reviews.filter(r => group.categories.includes(r.category));
          if (groupReviews.length === 0) return null;
          const anchorId = group.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section key={group.label} id={anchorId} style={{ marginBottom: 56 }}>
              <SectionHeading
                label={group.label}
                figure="§"
                title={group.label.split(" ")[0]}
                titleItalic={group.label.split(" ").slice(1).join(" ")}
                size="sm"
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {groupReviews.map((review) => (
                  <div
                    key={review.slug}
                    style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", border: "1px solid #E5E7EB", borderRadius: 14, overflow: "hidden", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", alignItems: "stretch" }}
                  >
                    {/* Accent bar */}
                    <div style={{ backgroundColor: review.accent }} />

                    {/* Content — clickable area */}
                    <Link href={`/reviews/${review.slug}`} className="hub-row-link" style={{ display: "flex", flexDirection: "column", gap: 8, padding: "18px 20px", textDecoration: "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: "0.15em", color: "#9CA3AF", textTransform: "uppercase" }}>{review.figure}</span>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#F8FAFB", border: "1px solid #E5E7EB", borderRadius: 4 }}>{review.category}</span>
                        {review.thirdParty && (
                          <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.1em", color: "#2D6A4F", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", textTransform: "uppercase" }}>3P Tested</span>
                        )}
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#111827", margin: 0, letterSpacing: "-0.01em" }}>{review.title}</h2>
                        <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", marginTop: 2 }}>{review.brand}</p>
                      </div>
                      <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{review.verdict}</p>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {review.tags.map((tag) => (
                          <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(14,135,132,0.06)", border: "1px solid rgba(14,135,132,0.15)", borderRadius: 4, fontSize: 9, color: "#0E8784", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.07em" }}>{tag}</span>
                        ))}
                      </div>
                    </Link>

                    {/* Score + CTA */}
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #F3F4F6", minWidth: 110, gap: 12 }}>
                      <div style={{ textAlign: "right" }}>
                        {review.image && (
                          <div style={{ width: 54, height: 66, backgroundColor: "#F8FAFB", border: "1px solid #E5E7EB", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, marginLeft: "auto" }}>
                            <img src={review.image} alt={review.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                          </div>
                        )}
                        <div style={{ display: "inline-flex", alignItems: "baseline", gap: 2, padding: "6px 12px", backgroundColor: ratingBg(review.rating), border: `1px solid ${ratingColor(review.rating)}30`, borderRadius: 8 }}>
                          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: ratingColor(review.rating), lineHeight: 1 }}>{review.rating}</span>
                          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 10, color: ratingColor(review.rating) }}>/10</span>
                        </div>
                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", color: "#9CA3AF", textTransform: "uppercase", marginTop: 4 }}>FSP Score</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                        {review.buyUrl && (
                          <a href={review.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", backgroundColor: "#0E8784", color: "#F9FAFB", fontSize: 10, fontWeight: 600, borderRadius: 5, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                            Buy ↗
                          </a>
                        )}
                        <Link href={`/reviews/${review.slug}`} style={{ fontSize: 11, color: "#0E8784", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Read →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* All reviews fallback — any not in a group */}
        {(() => {
          const groupedSlugs = categoryGroups.flatMap(g =>
            reviews.filter(r => g.categories.includes(r.category)).map(r => r.slug)
          );
          const ungrouped = reviews.filter(r => !groupedSlugs.includes(r.slug));
          if (ungrouped.length === 0) return null;
          return (
            <section style={{ marginBottom: 56 }}>
              <SectionHeading label="Other Reviews" figure="§" title="Other" titleItalic="reviews" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ungrouped.map((review) => (
                  <Link
                    key={review.slug}
                    href={`/reviews/${review.slug}`}
                    className="hub-row-link"
                    style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", border: "1px solid #E5E7EB", borderRadius: 14, overflow: "hidden", textDecoration: "none", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", alignItems: "stretch" }}
                  >
                    <div style={{ backgroundColor: review.accent }} />
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: "0.15em", color: "#9CA3AF", textTransform: "uppercase" }}>{review.figure}</span>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#F8FAFB", border: "1px solid #E5E7EB", borderRadius: 4 }}>{review.category}</span>
                      </div>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#111827", margin: 0 }}>{review.title}</h2>
                      <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{review.verdict}</p>
                    </div>
                    <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #F3F4F6", minWidth: 120 }}>
                      <div style={{ display: "inline-flex", alignItems: "baseline", gap: 2, padding: "6px 12px", backgroundColor: ratingBg(review.rating), border: `1px solid ${ratingColor(review.rating)}30`, borderRadius: 8 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: ratingColor(review.rating), lineHeight: 1 }}>{review.rating}</span>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 10, color: ratingColor(review.rating) }}>/10</span>
                      </div>
                      <span style={{ fontSize: 12, color: "#0E8784", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Review →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Scoring methodology note */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#111827", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7280", marginBottom: 10 }}>How We Score</p>
          <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75, marginBottom: 12 }}>
            Every product is rated on the Fitlab Scoring Protocol (FSP): formula integrity (30%), label transparency (20%), third-party verification (20%), value efficiency (15%), and practical quality (15%). No score is influenced by affiliate revenue or brand relationships.
          </p>
          <Link href="/methodology" style={{ fontSize: 13, color: "#0E8784", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Read the full scoring methodology →
          </Link>
        </div>

      </div>
    </div>
  );
}
