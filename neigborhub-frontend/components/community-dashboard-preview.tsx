import Image from "next/image"

export function CommunityDashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[900px]">
      <div className="bg-primary-light/30 rounded-2xl p-2 shadow-2xl">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nPvG45vZfy64WDs0jb4vWARfzjejCe.png"
          alt="Community sharing dashboard preview"
          width={900}
          height={540}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
