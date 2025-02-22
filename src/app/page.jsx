import { FloatingNavDemo } from '@/components/floatingNav'
import { LayoutGridDemo } from '@/components/layoutDemo'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import LampDemo from '@/components/ui/lamp'
import { LayoutGrid } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='min h-screen bg-[#020617]'>
            <FloatingNavDemo />
            <LampDemo />
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#020617]">
                <VelocityScroll defaultVelocity={2.5} className={"text-neutral-400"}>Blockchain, Web Design, IT Services & More        </VelocityScroll>
            </div>
            <LayoutGridDemo />
        </div>
    )
}
