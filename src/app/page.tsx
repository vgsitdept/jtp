import FlowingMenu from './components/FlowingMenu';
import Shuffle from './components/Shuffle';
import LiquidGlassLogo from './components/LiquidGlassLogo';
import TextType from './components/TextType';

const demoItems = [
  { link: 'https://chat.whatsapp.com/KZJJrfOwxDYJ5IIxXD1mew?mode=gi_t', text: 'WHATSAPP', image: '' },
  { link: 'https://www.instagram.com/vgsxgdg', text: 'Instagram', image: '' },
  { link: 'https://drive.google.com/file/d/1JivKlG-4OwIpdAOSSs5jXSbJHGe0NrvT/view?usp=sharing', text: 'More Info', image: '' }
  // { link: 'https://forms.gle/k9F3rM5a7f2mpqA46', text: 'OW Form', image: '' },
  // { link: 'https://forms.gle/EyQMnzRuohAc5TAMA', text: 'CW FOrm', image: '' },
];

export default function Home() {
  return (
    <div
      style={{
        width: 600,
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        gap: 32, // vertical space between components
      }}
      className="font-sans"
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <LiquidGlassLogo />
      </div>
      <TextType
        text={["Junior's Training Programme\n"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|VGS x GDG|"
        style={{
          fontFamily: 'Rubik Mono One, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: 26,
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '0.3px',
          textAlign: 'center'
        }}
      />
      <div
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}