import Homepage from '@/components/sections/home/home';
import StoriesSection from '@/components/sections/stories/stories';
import ExploreDatesSection from '@/components/sections/exploreDates/exploreDates';
import AllClientsSection from '@/components/sections/allClients/allClients';
import EveryDetailMatters from '@/components/sections/everyDetailMatters/everyDetailMatters';
import WeddingPlanning from '@/components/sections/weddingPlanning/weddingPlanning';
import WeddingRequirement from '@/components/sections/weddingRequirements/weddingRequirement';
import HowItWorks from '@/components/sections/howItWorks/howItWorks';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Homepage />
      <StoriesSection />
      <HowItWorks />
      <ExploreDatesSection />
      <AllClientsSection />
      <EveryDetailMatters />
      <WeddingPlanning />
      <WeddingRequirement />
      
    </div>
  );
}
