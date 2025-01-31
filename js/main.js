<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spencer Silva - Portfolio</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Adobe Fonts for Recta -->
    <link rel="stylesheet" href="https://use.typekit.net/[your-kit-code].css">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              recta: ['recta', 'serif'],
              mono: ['Space Mono', 'monospace'],
            },
          },
        },
      }
    </script>
    
    <!-- React (updated to use a single bundle) -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    
    <style>
      body {
        background-color: rgb(3, 7, 18);
      }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="js/main.js"></script>
</body>
</html>
