import styles from "./LiquidGlassLogo.module.css";

const LiquidGlassLogo: React.FC = () => (
  <div className={styles.logoGlassWrap}>
    <div className={styles.frostedLogo} />
    <div className={styles.edgeHighlight} />
    <div className={styles.innerShadow} />
    <div className={styles.dropShadow} />
  </div>
);

export default LiquidGlassLogo;