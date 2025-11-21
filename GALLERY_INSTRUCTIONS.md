# Gallery Photo Management Guide

## How to Add Photos to Your Gallery

### Step 1: Organize Your Photos
1. Create a folder: `images/gallery/` (if it doesn't exist)
2. Place all your photos in this folder
3. Name them clearly: `photo1.jpg`, `photo2.jpg`, etc. (or use descriptive names)

### Step 2: Update the Photo List
Open `script.js` and find the `galleryPhotos` array (around line 137).

Add your photos using this format:

```javascript
const galleryPhotos = [
  {
    image: 'images/gallery/photo1.jpg',
    title: 'Community Workshop',
    description: 'Empowering youth through STEM education'
  },
  {
    image: 'images/gallery/photo2.jpg',
    title: 'Training Session',
    description: 'Building technical skills for the future'
  },
  // Add more photos here!
  {
    image: 'images/gallery/photo50.jpg',
    title: 'Your Event Title',
    description: 'Description of the event'
  }
];
```

### Step 3: Save and Refresh
- Save the `script.js` file
- Refresh your gallery page in the browser
- All photos will automatically appear!

## Tips for Managing Many Photos

### Option A: Simple Numbering (Easiest)
- Name photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
- Add them all to the array in `script.js`

### Option B: Descriptive Names
```javascript
{
  image: 'images/gallery/workshop-2024-january.jpg',
  title: 'January 2024 Workshop',
  description: 'STEM training session with 50 students'
}
```

### Option C: Organize by Event/Category
```
images/gallery/
  ├── workshops/
  │   ├── workshop1.jpg
  │   └── workshop2.jpg
  ├── events/
  │   ├── event1.jpg
  │   └── event2.jpg
  └── training/
      ├── training1.jpg
      └── training2.jpg
```

Then reference them:
```javascript
{
  image: 'images/gallery/workshops/workshop1.jpg',
  title: 'Workshop Title',
  description: 'Workshop description'
}
```

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: Recommended 1200x800px (or similar landscape ratio)
- **File size**: Keep under 500KB for fast loading (compress if needed)
- **Aspect ratio**: 3:2 or 4:3 works best

## Quick Copy Template

Copy this and paste it for each new photo:

```javascript
{
  image: 'images/gallery/FILENAME.jpg',
  title: 'YOUR TITLE',
  description: 'YOUR DESCRIPTION'
},
```

**Note**: Don't forget the comma at the end of each entry (except the last one)!

## Need Help?

If photos don't appear:
1. Check the file path is correct
2. Make sure the image file exists in the folder
3. Check browser console for errors (F12)
4. Ensure there are no syntax errors (missing commas, quotes, etc.)
