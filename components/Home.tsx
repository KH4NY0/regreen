'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { WavyBackground } from './ui/wavy-background'
import React from 'react'


const navigation = [
  { name: 'Products', href: '#featured-products' },
  { name: 'Impact', href: '#impact-metrics' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About Us', href: '#about-us' },
]

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Regreen</span>
              <Image
                alt="regreen logo"
                src="/images/regreen-logo.svg"
                width={78}
                height={78}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:text-green-800  ease-in-out duration-300">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden relative z-50">
            <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
            />
           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Regreen</span>
                <Image
                  alt="regreen logo"
                  src="/images/regreen-logo.svg"
                  width={78}
                  height={78}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <WavyBackground>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#62d870] to-[#214618]'>Sustainability</span> Made Simple
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Transform your home into an eco-haven with curated, earth-friendly essentials delivered monthly.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="hover-button"
                >
                  Get Started
                </a>
                <a href="#how-it-works" className="text-sm/6 font-semibold text-gray-900 hover:text-green-800 ease-in-out duration-300">
                  How It Works <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Home