document.addEventListener('DOMContentLoaded', function() {
  // Get the current page path
  const currentPath = window.location.pathname;
  
  // Create the navigation HTML
  const navHTML = `
    <div class="p-4 border-b">
      <h1 class="text-xl font-semibold text-blue-600">ZIO Quartz H2</h1>
      <p class="text-sm text-gray-500 mt-1">HTTP/2 Server Documentation</p>
    </div>
    <nav class="mt-4">
      <ul>
        <li>
          <a href="index.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/index.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="font-medium">Overview</span>
          </a>
        </li>
        <li>
          <a href="routes.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/routes.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span class="font-medium">Routes DSL</span>
          </a>
        </li>
        <li>
          <a href="streams.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/streams.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="font-medium">ZStreams</span>
          </a>
        </li>
        <li>
          <a href="architecture.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/architecture.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span class="font-medium">Architecture</span>
          </a>
        </li>
        <li>
          <a href="xflow.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/xflow.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span class="font-medium">Flow Control</span>
          </a>
        </li>
        <li>
          <a href="zionio.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/zionio.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="font-medium">ZIO Async for Java NIO</span>
          </a>
        </li>
        <li>
          <a href="zio-iouring.html" class="flex items-center px-4 py-3 text-gray-700 ${currentPath.includes('/zio-iouring.html') ? 'active-menu-item' : ''} menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="font-medium">ZIO Async for IoUring</span>
          </a>
        </li>
      </ul>
    </nav>
  `;
  
  // Insert the navigation into the sidebar container
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = navHTML;
  }
});
