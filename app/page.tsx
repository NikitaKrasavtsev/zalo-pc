"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const shouldRedirect = urlParams.get("to_store") === "true";
        const timeout = shouldRedirect ? 0 : 2000;

        const timer = setTimeout(() => {
            window.location.href = "https://apps.apple.com/app/id1125517808";
        }, timeout);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="redirect-body">
            <style jsx global>{`
        .redirect-body {
          background-color: #f1f1f1;
          font-family: "Maven Pro", sans-serif;
          text-align: center;
          min-height: 100vh;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .redirect-body img {
          border-radius: 26px;
          box-shadow: 0 0 3px #b8b8b8;
          height: auto;
          margin-top: 15vh;
          max-width: 100px;
          width: 100%;
        }
        .redirect-body h1 {
          color: #575757;
          font-size: 1.2em;
          margin-bottom: 5vh;
        }
        .redirect-body .btn {
          background-color: #00bed5;
          border: 2px solid #00bed5;
          color: #fff;
          display: inline-block;
          font-weight: 700;
          letter-spacing: 0.1em;
          max-width: 200px;
          padding: 10px;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;
          width: 80%;
          cursor: pointer;
        }
        .redirect-body p {
          color: #b8b8b8;
          margin-top: 5vh;
          padding: 0 20px;
        }
      `}</style>

            <img
                src="https://www.apptrace.com/api/app/1125517808/artwork_url_512"
                alt="Adjust Insights - iOS"
            />
            <h1>Adjust Insights</h1>

            <a href="https://insights.go.link/zalo-pc" className="btn">
                Open App
            </a>
            <p>If the app doesn't open, you'll be sent to the App Store.</p>
        </div>
    );
}
