import HowItWorks from '@/components/sections/howItWorks/howItWorks';
import WeddingPlanning from '@/components/sections/weddingPlanning/weddingPlanning';
import Homepage from '@/components/sections/home/home';
import Stories from '@/components/sections/stories/stories';
import ExploreDates from '@/components/sections/exploreDates/exploreDates';
import EveryDetailMatters from '@/components/sections/everyDetailMatters/everyDetailMatters';
import WeddingRequirement from '@/components/sections/weddingRequirements/weddingRequirement';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Homepage />
      <HowItWorks />
      <Stories />
      <WeddingPlanning />
      <ExploreDates />
      <EveryDetailMatters />
      <WeddingRequirement />
    </div>
  );
}
