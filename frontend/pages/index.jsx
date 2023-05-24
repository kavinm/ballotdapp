import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import VotingDapp from "../components/VotingDapp.jsx";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
        {/* <VotingDapp></VotingDapp> */}
      </main>
    </div>
  );
}
