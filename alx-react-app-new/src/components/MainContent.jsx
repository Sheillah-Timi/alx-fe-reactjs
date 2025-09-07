function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#eef2f3",
        minHeight: "200px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Welcome to My React App
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
        Here you can explore different cities and learn more about them. This
        section is styled with inline CSS for better readability and layout.
      </p>
    </main>
  );
}

export default MainContent;
