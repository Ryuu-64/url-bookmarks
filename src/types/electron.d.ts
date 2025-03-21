import {
    CreateBookmark,
    FindAllBookmarks,
    FindAllCategories,
    FindAllCategoriesWithParent,
    FindBookmark,
    FindCategoryTree,
    ImportChromeBookmark,
    DeleteCategoryById, UpdateCategory,
} from "./api";

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface Window {
        electronAPI: {
            categoryAPI: {
                findAllCategories: FindAllCategories
                findAllCategoriesWithParent: FindAllCategoriesWithParent
                findCategoryTree: FindCategoryTree
                updateCategory: UpdateCategory
                deleteCategoryById: DeleteCategoryById
            };
            fileAPI: {
                importChromeBookmark: ImportChromeBookmark
            };
            bookmarkAPI: {
                createBookmark: CreateBookmark
                findBookmark: FindBookmark
                findAllBookmarks: FindAllBookmarks
            };
        };
    }
}
