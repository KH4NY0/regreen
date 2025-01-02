import { ClipboardIcon, LeafIcon, PackageIcon } from "lucide-react"

const HowItWorks = () => {
    const steps = [
        {
          number: '01',
          title: 'Take the Eco Quiz',
          description: 'Tell us about your lifestyle and sustainability goals through our quick 2-minute quiz.',
          icon: <ClipboardIcon className="h-12 w-12 text-emerald-600" />
        },
        {
          number: '02',
          title: 'Get Your Personalized Box',
          description: 'Receive a curated selection of eco-friendly products tailored to your preferences.',
          icon: <PackageIcon className="h-12 w-12 text-emerald-600" />
        },
        {
          number: '03',
          title: 'Make an Impact',
          description: 'Track your environmental impact as you replace traditional products with sustainable alternatives.',
          icon: <LeafIcon className="h-12 w-12 text-emerald-600" />
        }
      ]  

      return (
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Making Sustainability Simple
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Join thousands of households reducing their environmental impact through our easy three-step process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="absolute -left-4 -top-4 text-6xl font-bold text-emerald-100">
                    {step.number}
                  </div>
                  <div className="relative bg-white rounded-xl p-8 shadow-sm">
                    {step.icon}
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-4 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }  
  
export default HowItWorks
