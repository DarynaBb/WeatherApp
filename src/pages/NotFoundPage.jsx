export const NotFoundPage = () => {
    const goBack = () => {
      window.history.back();
    };
    return (
      <div className="not-found-page">
        <h1>Not Found Page</h1>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    );
  };
  