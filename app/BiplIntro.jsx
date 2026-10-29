
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BiplIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setLeaving(true);
    }, 2900);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`bipl-intro ${leaving ? "bipl-intro-exit" : ""}`}>
      <div className="bipl-intro-content">
        <Image
          src="/images/bipl-logo.png"
          alt="BUV Innotech Private Limited"
          width={220}
          height={220}
          priority
        />

        <h1 className="bipl-company-name">
          BUV INNOTECH PRIVATE LIMITED
        </h1>

        <p className="bipl-tagline">
          INNOVATION. TECHNOLOGY. TRUST.
        </p>
      </div>
    </div>
  );
}
