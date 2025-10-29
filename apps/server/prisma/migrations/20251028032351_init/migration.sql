-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "cuisine" TEXT NOT NULL,
    "timeMinutes" INTEGER NOT NULL,
    "costEstimate" INTEGER,
    "dietTags" JSONB NOT NULL,
    "skillLevel" INTEGER NOT NULL,
    "sidePairs" JSONB NOT NULL,
    "flavor" JSONB NOT NULL,
    "createdById" TEXT
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "groups" JSONB NOT NULL,
    "aliases" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "IngredientUse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "qty" REAL,
    "unit" TEXT,
    "optional" BOOLEAN NOT NULL DEFAULT false,
    "isKeystone" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "IngredientUse_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "IngredientUse_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "timersSec" INTEGER,
    CONSTRAINT "Step_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Quirk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeId" TEXT NOT NULL,
    "stepIndex" INTEGER,
    "text" TEXT NOT NULL,
    "tags" JSONB NOT NULL,
    "authorId" TEXT,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Quirk_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CuisineDNA" (
    "cuisine" TEXT NOT NULL PRIMARY KEY,
    "aromatics" JSONB NOT NULL,
    "baseSpices" JSONB NOT NULL,
    "staples" JSONB NOT NULL,
    "techniques" JSONB NOT NULL,
    "subsGraphJson" JSONB NOT NULL
);

-- CreateIndex
CREATE INDEX "Recipe_cuisine_idx" ON "Recipe"("cuisine");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Step_recipeId_index_key" ON "Step"("recipeId", "index");
