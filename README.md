# Note-Manager

Note-Manager is a frontend project developed using TypeScript. The project was motivated by Notion and developed to store different types of contents like images, videos, notes and to-do lists.

The project was developed to intend to get a better understanding of TypeScript and OOP paradigm.

## Technologies

* TypeScript
* OOP paradigm

## Folder Structure

    root
    ├── source  
    |      ├── app.ts   # contains App class
    |      └── components   # contains classes for building page and dialogs
    |             ├── component.ts   # contains BaseComponent class. Used as base HTML component for all classes.
    |             ├── dialog
    |             |      ├── dialog.ts   # contains InputDialog class. Attached to document.body.
    |             |      └── input
    |             |             ├── media-input.ts   # contains MediaSectionInput class for images and videos. Attached to InputDialog.
    |             |             └── text-input.ts   # contains TextSectionInput class for text-based contents. Attached to InputDialog.
    |             └── page
    |                    ├── page.ts   # contains PageItemComponent and PageComponent. The formaer is attached to the latter.
    |                    └── item   # contains classes for creating elements. They are wrapped with PageItemComponent and attached to pageComponent
    |                           ├── image.ts   # contains ImageComponent class
    |                           ├── note.ts   # contains NoteComponent class
    |                           ├── todo.ts   # contains TodoComponent class
    |                           └── video.ts   # contains VideoComponent class
    ├── style          
    |      └── style.css
    ├── assets          
    |      └── background.png
    └── index.html

## Class diagram

![class-diagram](https://user-images.githubusercontent.com/69476757/138711467-daddba0f-6e37-41b2-87c0-42e8ed9e9b77.png)
