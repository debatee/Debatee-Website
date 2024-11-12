import { features } from '@/app/model/feature-model'
import FeatureCardRow from './components/feature-card-row'

export default function FeatureSection() {
    return (
        <section id='features' className="flex w-full bg-blue-primary">
            <div className="flex flex-col w-full bg-white py-[80px] md:py-[0px] md:pt-[160px] px-[40px] md:px-[80px] lg:px-[160px] space-y-[80px] rounded-b-[90px]">
                <div className='flex flex-col w-full space-y-[32px] items-center px-[32px]'>
                    <div className='inline-block text-4xl md:text-6xl font-semibold items-center text-center'>
                        <p className='inline text-blue'>Designed </p>
                        <p className='inline text-black'>for Debaters, </p>
                        <p className='inline text-blue'>Supported </p>
                        <p className='inline text-black'>by Debaters</p>
                    </div>
                    <div className='inline-block text-xl md:text-3xl text-gray-700 items-center text-center'>
                        <p className='inline'>Whether you’re a beginner or an experienced speaker, you’ll find tools to enhance every aspect of your debating. </p>
                        <p className='inline font-bold'>This is what we offer:</p>
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-[32px] md:space-y-[0px]'>
                    <FeatureCardRow features={features.slice(0, 2)}/>
                    <div className='w-full md:top-[15%] md:transform md:-translate-y-[15%]'>
                        <FeatureCardRow features={features.slice(2, 4)}/>
                    </div>
                    <div className='w-full md:top-[30%] md:transform md:-translate-y-[30%]'>
                        <FeatureCardRow features={features.slice(4, 6)}/>
                    </div>
                </div>
            </div>
        </section>
    );
}