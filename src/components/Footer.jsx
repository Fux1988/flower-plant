
export default function Footer() {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <p><strong>FlowerPlant</strong></p>
        <p>123 Botanical Lane, Green City, 2345 Copenhagen, Denmark</p>
        <p>Email: flowplant123@flowerplant2026.dk</p>
        <p>Mobile: +45 2076765</p>
        <p>© {new Date().getFullYear()} FlowerPlant. All rights reserved.</p>
      </div>
    </footer>
  );
}