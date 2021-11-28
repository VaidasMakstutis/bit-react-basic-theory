function Half({ dots }) {
  switch (dots) {
      
    case 0:
      return <div className="dot-container dot-container-6"></div>;

    case 1:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
        </div>
      );

    case 2:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );

    case 3:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );

    case 4:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );

    case 5:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );

    case 6:
      return (
        <div className="dot-container dot-container-6">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );
    default:
  }
}

export default Half;
