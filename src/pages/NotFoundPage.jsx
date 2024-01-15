export const NotFoundPage = () => {
    const goBack = () => {
      window.history.back();
    };
    return (
      <div className="not-found-page">
        <h1>Not Found Page</h1>
        <button className="mt-[50px]" onClick={() => goBack()}>Back to main page</button>
      </div>
    );
  };
  