function TerminalParagraph({ text }: { text: string }) {
  return (
    <p className="terminalLine">
      <span className="machine">user@DESKTOP-551ABR8</span>
      <span className="lineWhite">:</span>
      <span className="lineBlue">~/repos/portfoliosite</span>
      <span className="lineWhite">{`$ ${text}`}</span>
    </p>
  );
}

export default TerminalParagraph;
