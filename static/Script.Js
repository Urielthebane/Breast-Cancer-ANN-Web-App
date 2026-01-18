// Sample breast cancer data for autofill
const sampleData = {
    "mean_radius": 17.99,
    "mean_texture": 10.38,
    "mean_perimeter": 122.80,
    "mean_area": 1001,
    "mean_smoothness": 0.11840,
    "mean_compactness": 0.27760,
    "mean_concavity": 0.30010,
    "mean_concave_points": 0.14710,
    "mean_symmetry": 0.2419,
    "mean_fractal_dimension": 0.07871,
    "radius_error": 1.0950,
    "texture_error": 0.9053,
    "perimeter_error": 8.589,
    "area_error": 153.40,
    "smoothness_error": 0.006399,
    "compactness_error": 0.04904,
    "concavity_error": 0.05373,
    "concave_points_error": 0.01587,
    "symmetry_error": 0.03003,
    "fractal_dimension_error": 0.002250,
    "worst_radius": 25.38,
    "worst_texture": 17.33,
    "worst_perimeter": 184.60,
    "worst_area": 2019,
    "worst_smoothness": 0.1622,
    "worst_compactness": 0.6656,
    "worst_concavity": 0.7119,
    "worst_concave_points": 0.2654,
    "worst_symmetry": 0.4601,
    "worst_fractal_dimension": 0.11890
};

// Function to autofill sample data
function fillSample() {
    for (const [key, value] of Object.entries(sampleData)) {
        const input = document.querySelector(`input[name="${key}"]`);
        if (input) {
            input.value = value;
        }
    }
}
