# Gallery App

This is a React-based Gallery app that allows users to view a collection of images and filter them based on tags. Users can click on tags to filter the images displayed in the gallery. This README provides an overview of the app's components, structure, and usage.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Components](#components)
    -   [App](#app)
    -   [Gallery](#gallery)
    -   [Image](#image)
-   [Usage](#usage)

## Getting Started

To get started with this Gallery app, follow these steps:

1. Clone the repository to your local machine:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd gallery-app
    ```

3. Install the required dependencies:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm start
    ```

    The app should now be running at `http://localhost:3000`.

## Components

### App

The `App` component serves as the main entry point of the Gallery app. It manages the state of active and inactive tags and renders the tag buttons and the image gallery accordingly.

#### Tags

-   Active tags are those currently selected by the user for filtering images.
-   Inactive tags are tags that are available for selection but are not currently active.

#### Handling Tag Clicks

-   Clicking on a tag button toggles its state between active and inactive, updating the tag filter accordingly.

### Gallery

The `Gallery` component is a reusable component that provides a container for displaying a grid of images. It accepts child components (in this case, `Image` components) to be displayed within the gallery container.

### Image

The `Image` component represents an individual image in the gallery. When a user clicks on an image, it opens in a modal for a closer view. The modal allows users to click outside the image to close it or use a close button.

### Sample Image .zip

In order to fully test the app, feel free to download a set of images from https://www.dropbox.com/s/1n1kg3impje0o5u/gallery-ts.zip and save them in the public/imgs folder.

## Usage

1. When you run the Gallery app, you will see a list of tags at the top of the page.

2. Click on any tag to filter the images displayed in the gallery. Active tags are highlighted, and inactive tags are crossed out.

3. Click on an image in the gallery to open it in a modal for a closer view. Click outside the modal or use the close button (X) to close the image.
