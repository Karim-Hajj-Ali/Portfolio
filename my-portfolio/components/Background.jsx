export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base radial */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 25%, #243a2d 0%, #18241d 32%, #0d1510 62%, #070b08 100%)',
        }}
      />

      {/* aurora glows */}
      <div
        className="aurora-a absolute -top-1/4 left-1/2 h-[55vw] w-[55vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.20), transparent 65%)' }}
      />
      <div
        className="aurora-b absolute top-1/3 -left-32 h-[40vw] w-[40vw] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.16), transparent 60%)' }}
      />
      <div
        className="aurora-a absolute bottom-0 right-0 h-[42vw] w-[42vw] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.12), transparent 60%)' }}
      />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)',
        }}
      />

      {/* grain */}
      <div className="grain absolute inset-0 opacity-[0.025] mix-blend-overlay" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)' }}
      />
    </div>
  )
}
