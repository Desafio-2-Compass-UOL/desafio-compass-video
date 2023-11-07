import './LoadingPage.css';

export default function LoginPage() {

    setTimeout(() => {window.location.href = `http://localhost:5173/home`}, 500);

    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
      
    );
  }
  