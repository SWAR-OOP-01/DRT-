"use client";

import { QRCodeSVG } from "qrcode.react";

type BrandQRProps = {
  value: string;
  size?: number;
  className?: string;
};

/**
 * A vector (SVG) QR code with the DRT gold emblem embedded dead-center.
 */
export function BrandQR({ value, size = 128, className }: BrandQRProps) {
  return (
    <div className={className}>
      <QRCodeSVG
        value={value}
        size={size}
        level="H"
        bgColor="transparent"
        fgColor="#1a1815"
        marginSize={0}
        imageSettings={{
          src: "/drt-emblem-green.png",
          height: Math.round(size * 0.26),
          width: Math.round(size * 0.26),
          excavate: true,
        }}
      />
    </div>
  );
}
