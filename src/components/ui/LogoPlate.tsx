import Image from 'next/image';

export function LogoPlate({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-[18px] bg-white p-2 shadow-[0_10px_24px_rgba(10,15,34,0.14)] ${className}`}>
      <Image src="/brand/veda-logo.png" alt="" width={64} height={64} quality={100} unoptimized className="h-auto w-auto object-contain" />
    </div>
  );
}
