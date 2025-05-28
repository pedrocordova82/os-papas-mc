import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import HeadOfficePage from './pages/HeadOfficePage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="our-story" element={<OurStoryPage />} />
        <Route path="head-office" element={<HeadOfficePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;