import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

interface GoogleMapProps {
  apiKey?: string;
  initialLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
  height?: string;
  className?: string;
}

export const GoogleMap = ({
  apiKey = "YOUR_API_KEY", // Users should replace with their actual API key
  initialLocation = {
    lat: 33.2476,
lng: -84.2867,
    address: "1531 W McIntosh Rd Griffin GA 30223"
  },
  onLocationSelect,
  height = "400px",
  className = "",
}: GoogleMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [isInteractive, setIsInteractive] = useState(false);

  const handleMapClick = () => {
    // Note: In a real implementation with Google Maps JavaScript API,
    // you would add click event listeners to the map
    // This is a simplified version that shows the concept
    setIsInteractive(!isInteractive);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: "Your current location"
          };
          setSelectedLocation(newLocation);
          onLocationSelect?.(newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <motion.div
      className={`rounded-xl overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Map Container */}
      <div className="relative" style={{ height }}>
        <iframe
  src={`https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&output=embed`}
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  title="Location"
/>

        {/* Interactive Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetCurrentLocation}
            className="bg-primary text-primary-foreground p-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
            title="Use my current location"
          >
            <Navigation className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Location Info */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Selected Location</p>
                <p className="text-sm text-muted-foreground">{selectedLocation.address}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Lat: {selectedLocation.lat.toFixed(6)}, Lng: {selectedLocation.lng.toFixed(6)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-primary/5 p-4 rounded-b-xl border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-medium text-foreground">Interactive Map:</span> Click the location button to use your current location
        </p>
      </div>
    </motion.div>
  );
};

// Helper function to generate Google Maps embed URL
function generateMapEmbedUrl(lat: number, lng: number): string {
  return `!1m18!1m12!1m3!1d0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s1531%20W%20McIntosh%20Rd%20Griffin%20GA%2030223!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s`;
}

export default GoogleMap;
