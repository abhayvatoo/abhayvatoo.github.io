export default function Footer() {
  return (
    <footer className="flex p-4 justify-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Abhay Vatoo.
      </p>
    </footer>
  );
}
